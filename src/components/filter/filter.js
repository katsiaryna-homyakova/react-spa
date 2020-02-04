// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from 'Components/button/button';
import './filter.scss';

type FilterTypes = {
  id: string,
  value: string
}
type PropTypes = {
  activeFilter: string,
  title: string,
  handleChangeFilter: Function,
  filters: Array<FilterTypes>
};

export default class Filter extends Component <PropTypes> {
  constructor(props) {
    super(props);
    this.state = { active: props.activeFilter };
  }

  makeActive = (key: string) => {
    this.setState({ active: key });
    const { handleChangeFilter } = this.props;
    handleChangeFilter(key);
  }

  render() {
    const { title, filters }: {title: String, filters: FilterTypes} = this.props;
    const { active }: {active: string} = this.state;
    return (
      <div className="filter">
        <span className="filter-title">{title}</span>

        {filters.map((item: FilterTypes) => (
          <Button
            text={item.value}
            key={item.id}
            classes={`base-button ${
              active === item.id ? 'active' : ''
            }`}
            handleClick={() => this.makeActive(item.id)}
          />
        ))}
      </div>
    );
  }
}
