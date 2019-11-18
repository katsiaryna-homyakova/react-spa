import React from "react";
import ReactDOM from "react-dom";

import HeaderSection from "./components/headerSection";
import Search from "./components/search";
import FilmDescription from "./components/filmDescription";
import ResultsContainer from "./components/resultContainer";

import ErrorBoundary from "./components/errorBoundry";
import "./styles/app.scss";
import Footer from "./components/footer";


const states = ['index', 'film-description'];
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
  
let div = React.createElement(
  "div",
  null,
  <ErrorBoundary>

<HeaderSection>{curState === 'index'? <Search/> : curState === 'film-description' ? <FilmDescription {...curFilm}/> : null}</HeaderSection>
    <ResultsContainer />
    <Footer />
  </ErrorBoundary>
);

ReactDOM.render(div, document.querySelector("#root"));
