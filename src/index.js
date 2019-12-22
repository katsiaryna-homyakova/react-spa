import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderSection from './components/headerSection/headerSection';
import ConnectedSearch from './components/search/search';
import WrappedFilmDescription from './components/filmDescription/filmDescription';
import ConnectedResultsContainer from './components/resultContainer/resultContainer';

import ErrorBoundary from './components/errorBoundry/errorBoundry';
import './styles/app.scss';
import Footer from './components/footer/footer';
import NotFound from './components/notFound/notFound';
import configureStore from './redux/store';
import * as Constants from './constants';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ErrorBoundary>
        <Switch>
          <Route exact path={Constants.ALL_PAGES}>
            <HeaderSection>
              <Switch>
                <Route
                  path={Constants.FILE_DESCRIPTION_PAGE}
                  render={(props) => (
                    <WrappedFilmDescription locaation={props.location} />
                  )}
                />
                <Route path={Constants.LANDING_PAGE}>
                  <ConnectedSearch />
                </Route>
              </Switch>
            </HeaderSection>
            <ConnectedResultsContainer />

            <Footer />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Provider>
  </Router>,
  document.querySelector('#root'),
);
