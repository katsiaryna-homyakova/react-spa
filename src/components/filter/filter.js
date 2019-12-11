import React, {Component} from "react";
import Button from "../button/button";
import "./filter.scss";

export default class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = { active: props.activeFilter };
  }

  componentWillReceiveProps(props) {
    this.setState({ active: props.activeFilter })
  }
  makeActive = (key, event) => {
    this.setState({ active: key });
    this.props.handleChangeFilter(key)
  };
  render() {
    return (
      <div className="filter">
        <span className="filter-title">{this.props.title}</span>

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
