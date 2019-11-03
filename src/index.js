  
import React from 'react';
import ReactDOM from 'react-dom';   

import LikeButton from "./js/likeThis.js";
import WelcomeMessage from "./js/welcomeMessage.js";
import PercentageStat from "./js/pureComponent.js";

let div = React.createElement(
  "div",
  null,
  <WelcomeMessage welcomMessage={"Hello, world!!!"}/>,
  <LikeButton/>,
  React.createElement(PercentageStat, { label: "Percentage", score: 0.5 })
);

ReactDOM.render(div, document.querySelector("#root"));
