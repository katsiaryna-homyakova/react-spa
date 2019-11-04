import LikeButton from "./likeThis.js";
import WelcomeMessage from "./welcomeMessage.js";
import PercentageStat from "./pureComponent.js";

let div = React.createElement(
  "div",
  null,
  React.createElement(WelcomeMessage),
  React.createElement(LikeButton),
  React.createElement(PercentageStat, { label: "Percentage", score: 0.3 })
);

ReactDOM.render(div, document.querySelector("#root"));
