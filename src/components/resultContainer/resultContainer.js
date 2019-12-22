import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmCard from '../filmCard/filmCard';
import Filter from '../filter/filter';
import { retrieveMovies, setSorting } from '../../redux/actions';

import './resultContainer.scss';

export class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.filters = [
      { id: 'releaseDate', value: 'Release date' },
      { id: 'genre', value: 'Rating' },
    ];
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  handleChangeFilter = (value) => {
    const { updateSorting, fetchData } = this.props;
    updateSorting(value);
    fetchData();
  }

  render() {
    const { resultsData, sortResultsBy } = this.props;
    if (!resultsData) {
      return 'loading';
    }
    return (
      <>
        <div className="result-navigarion">
          <Filter
            title="Sort by"
            handleChangeFilter={this.handleChangeFilter}
            filters={this.filters}
            activeFilter={sortResultsBy}
          />
        </div>
        <div className="result-section row">

          {resultsData.map((item) => (
            <div className="col-4" key={item.id}>
              <FilmCard
                id={item.id}
                imgPath={item.imgPath}
                title={item.title}
                genre={item.genre}
                rating={item.rating}
                releaseDate={item.releaseDate}
              />
            </div>
          ))}

        </div>
      </>
    );
  }
}

ResultsContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  updateSorting: PropTypes.func.isRequired,
  sortResultsBy: PropTypes.string.isRequired,
  resultsData: PropTypes.arrayOf(PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    rating: PropTypes.number,
  })),
};

ResultsContainer.defaultProps = {
  resultsData: null,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(retrieveMovies()),
  updateSorting: (sortBy) => dispatch(setSorting(sortBy)),
});

const mapStateToProps = (state) => ({
  resultsData: state.resultsData,
  sortResultsBy: state.sortResultsBy,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
