import React from "react";
import Logo from "../logo";
import Title from "../title";

import Search from "../search";
import "./index.scss";

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container-wrapper">
        <div className="search-container-blur"></div>
        <div className="search-container-content">
          <div className="logo-head">
            <Logo />
          </div>
          <Title text={"FIND YOUR MOVIE"} />

          <Search />
         
        </div>
      </div>
    );
  }
}
