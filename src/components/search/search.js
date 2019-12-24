import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'Components/button/button';
import Filter from 'Components/filter/filter';
import Title from 'Components/title/title';
import './search.scss';
import {
  search, modifyCurSearchFilter, modifyCurSearchText, retrieveMovies,
} from 'App/redux/actions';

import * as Constants from '../../constants';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.filters = [
      { id: 'title', value: 'Title' },
      { id: 'genres', value: 'Genre' },
    ];
  }

  handleChangeText = (event) => {
    const { handleChangeText } = this.props;
    handleChangeText(event.target.value);
  };

  submitSearchEvent = () => {
    const { submitSearch, fetchData } = this.props;
    submitSearch();
    fetchData();
  };

  render() {
    const { value, handleChangeFilter, activeFilter } = this.props;
    return (
      <div className="search">
        <Title text={Constants.FIND_MOVIE_TEXT} />
        <div className="input-group">
          <input
            type="text"
            value={value}
            onChange={this.handleChangeText}
            placeholder="Search"
          />

          <Button
            text="Search"
            classes="base-button pink"
            handleClick={this.submitSearchEvent}
            id="submitSearch"
          />
        </div>
        <Filter
          title="Search by"
          handleChangeFilter={handleChangeFilter}
          filters={this.filters}
          activeFilter={activeFilter}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitSearch: () => dispatch(search()),
    fetchData: () => dispatch(retrieveMovies()),
    handleChangeFilter: (value) => dispatch(modifyCurSearchFilter(value)),
    handleChangeText: (value) => dispatch(modifyCurSearchText(value)),
  };
}


const mapStateToProps = (state) => ({
  value: state.curSearch.text,
  activeFilter: state.curSearch.filters,
});

Search.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  value: PropTypes.string,

};

Search.defaultProps = {
  value: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
