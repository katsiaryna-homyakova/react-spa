import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';

import configureStore from './redux/store';
function renderHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width" />
         
       <title>!Find your movie!</title>
    </head>
    
    <body>
    
    
       <div id="root">${html}</div>
       <script>
       // WARNING: See the following for security issues around embedding JSON in HTML:
       // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
       window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
     </script>
       <script src="/bundle.js"></script>
    </body>
    
    </html>
    `;
  }
  
  export default function serverRender() {
    return (req, res) => {
      const store = configureStore();
      // This context object contains the results of the render
      const context = {};
     // console.log(req.url);
      const renderRoot = () => (
       
        <Root
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />
      );
 //почему не работает done вместо toPromise????
      store.runSaga().toPromise().then(() => {
        const htmlString = renderToString(renderRoot());
  
  
  
        const preloadedState = store.getState();
  
        res.send(renderHTML(htmlString, preloadedState));
      });

    // Do first render, starts initial actions.
    renderToString(renderRoot());
    // When the first render is finished, send the END action to redux-saga.
    store.close();
  
  };
  }
  