import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/button/button';
import './filter.scss';


export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { active: props.activeFilter };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.activeFilter !== prevState.active) {
      return { active: nextProps.activeFilter };
    }
    return null;
  }

  makeActive = (key) => {
    this.setState({ active: key });
    const { handleChangeFilter } = this.props;
    handleChangeFilter(key);
  }

  render() {
    const { title, filters } = this.props;
    const { active } = this.state;
    return (
      <div className="filter">
        <span className="filter-title">{title}</span>

        {filters.map((item) => (
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

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};
