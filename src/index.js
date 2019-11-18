import React from "react";
import ReactDOM from "react-dom";

import SearchContainer from "./components/searchSection";
import ResultsContainer from "./components/resultContainer";
import ErrorBoundary from "./components/errorBoundry";
import "./styles/app.scss";
import Footer from "./components/footer";

let div = React.createElement(
  "div",
  null,
  <ErrorBoundary>
    <SearchContainer />

    <ResultsContainer />
    <Footer />
  </ErrorBoundary>
);

ReactDOM.render(div, document.querySelector("#root"));
