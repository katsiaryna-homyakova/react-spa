import React from "react";
import Button from "./../button";
import Filter from "../filter";
import Title from "../title";
import "./index.scss";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", activeFilter: "title" };
    this.filters = [
      { id: "title", value: "Title" },
      { id: "genre", value: "Genre" }
    ];
  }

  handleChangeText = event => {
    this.setState({ value: event.target.value });
  };
  handleChangeFilter = value => {
    this.setState({ activeFilter: value });
  };

  submitSearch = event => {
    alert(
      "Search by: " +
        this.state.value +
        ", filter: " +
        this.state.activeFilter
    );
  };

  render() {
    return (
      <div className="search">
        <Title text={"FIND YOUR MOVIE"} />
        <div className="input-group">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeText}
            placeholder="Search"
          />

          <Button
            text={"Search"}
            classes={"base-button pink"}
            handleClick={this.submitSearch}
            id="submitSearch"
          />
        </div>
        <Filter
          title={"Search by"}
          handleChangeFilter={this.handleChangeFilter}
          filters={this.filters}
          activeByDefault={this.state.activeFilter}
        />
      </div>
    );
  }
}
