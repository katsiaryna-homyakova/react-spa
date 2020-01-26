import React from 'react';

import { Provider } from 'react-redux';
import {  Switch, Route } from 'react-router-dom';
import HeaderSection from './components/headerSection/headerSection';
import ConnectedSearch from './components/search/search';
import FilmDescription from './components/filmDescription/filmDescription';
import ConnectedResultsContainer from './components/resultContainer/resultContainer';

import ErrorBoundary from './components/errorBoundry/errorBoundry';
import Footer from './components/footer/footer';
import NotFound from './components/notFound/notFound';

import * as Constants from './constants';

import 'isomorphic-fetch';
import 'babel-polyfill';

const Root = ({
    Router, location, context, store,
  }) => (

  <Router location={location} context={context}>
    <Provider store={store}>
      <ErrorBoundary>
        <Switch>
          <Route exact path={Constants.ALL_PAGES}>
            <HeaderSection>
              <Switch>
                <Route
                  path={Constants.FILM_DESCRIPTION_PAGE}
                  render={(props) => (
                    <FilmDescription location={location} />
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
  </Router>
);


export default Root;