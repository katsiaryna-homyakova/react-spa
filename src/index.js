import React from "react";
import ReactDOM from "react-dom";

import HeaderSection from "./components/headerSection";
import Search from "./components/search";
import FilmDescription from "./components/filmDescription";
import ResultsContainer from "./components/resultContainer";

import ErrorBoundary from "./components/errorBoundry";
import "./styles/app.scss";
import Footer from "./components/footer";
import configureStore from './redux/store'

import { Provider } from 'react-redux'


import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



const states = ['index', 'film-description'];
//choose from states
let curState ='index';

let curFilm =  {
  imgPath: "src/images/header.jpg",
  title: "First title",
  genre: "Animation",
  releaseDate: "1998",
  rating: 10,
  duration: 123,
  description: `Best of the best filn we've ever seen. 100% recommended to see. Enjoy!`
}

const store = configureStore();

ReactDOM.render(  <Provider store={store}>

    <ErrorBoundary>

  <HeaderSection>{curState === 'index'? <Search/> : curState === 'film-description' ? <FilmDescription {...curFilm}/> : null}</HeaderSection>
      <ResultsContainer />
      <Footer />
    </ErrorBoundary>
</Provider>,
 document.querySelector("#root"));
