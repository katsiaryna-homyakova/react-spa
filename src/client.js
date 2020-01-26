import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router } from 'react-router-dom';

import './styles/app.scss';

import configureStore from './redux/store';

import Root from './Root';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <Root 
  Router={Router}
  store={store}/>,
  document.querySelector('#root'),
);
