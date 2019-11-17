import React from "react";
import Button from "./../button";
import "./index.scss";

export default class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: props.activeByDefault };
  }

  makeActive = (key, event) => {
    this.setState({ active: key });
    this.props.handleChangeFilter(key)
  };
  render() {
    return (
      <div className="filter">
        <span className="title">{this.props.title}</span>

        {this.props.filters.map((item, key) => (
          <Button
            text={item.value}
            key={item.id}
            classes={`base-button ${
              this.state.active === item.id ? "active" : ""
            }`}
            handleClick={e => this.makeActive(item.id, e)}
          />
        ))}
      </div>
    );
  }
}
