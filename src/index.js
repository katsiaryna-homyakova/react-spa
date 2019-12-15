import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import HeaderSection from './components/headerSection/headerSection';
import ConnectedSearch from './components/search/search';
import FilmDescription from './components/filmDescription/filmDescription';
import ConnectedResultsContainer from './components/resultContainer/resultContainer';

import ErrorBoundary from './components/errorBoundry/errorBoundry';
import './styles/app.scss';
import Footer from './components/footer/footer';
import configureStore from './redux/store';


import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const states = ['index', 'filmDescription'];
// choose from states
const curState = states[0];

const curFilm = {
  imgPath: 'src/images/header.jpg',
  title: 'First title',
  genre: 'Animation',
  releaseDate: '1998',
  rating: 10,
  duration: 123,
  description: 'Best of the best filn we\'ve ever seen. 100% recommended to see. Enjoy!',
};
const {
  imgPath, title, genre, releaseDate, rating, duration, description,
} = curFilm;
const dataDisplay = {
  index: <ConnectedSearch />,
  filmDescription: <FilmDescription
    imgPath={imgPath}
    title={title}
    genre={genre}
    releaseDate={releaseDate}
    duration={duration}
    rating={rating}
    description={description}
  />,
};
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>

    <ErrorBoundary>

      <HeaderSection>{dataDisplay[curState]}</HeaderSection>
      <ConnectedResultsContainer />
      <Footer />
    </ErrorBoundary>
  </Provider>,
  document.querySelector('#root'),
);
