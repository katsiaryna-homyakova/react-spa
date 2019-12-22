import React, { Component } from 'react';
import { connect } from 'react-redux';
import './filmDescription.scss';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';
import { retrieveMovieById } from '../../redux/actions';

export class FilmDescription extends Component {
  componentDidMount() {
    const { fetchData, id } = this.props;
    fetchData(id);
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.id;
    const { id } = this.props;

    if (prevId !== id) {
      const { fetchData } = this.props;
      fetchData(id);
    }
  }

  render() {
    const { curFilm } = this.props;
    if (!curFilm) {
      return 'loading';
    }
    return (
      <div className="film-description row">

        <img className="image-cover col-3" src={curFilm.imgPath} alt={curFilm.title} />
        <div className="col-9">
          <p className="film-description-block-title">
            <span className="film-description-title">
              {curFilm.title}
              {' '}
            </span>
            <span className="rating">{curFilm.rating || '...'}</span>
          </p>
          <p className="genre">{curFilm.genre}</p>
          <p className="date-and-duration ">
            <span className="highlight date">
              {curFilm.releaseDate}
              {' '}
            </span>
  year
            <span className="highlight duration">
              {curFilm.duration}
              {' '}
            </span>
            {curFilm.duration ? 'min' : ''}

          </p>
          <p className="description ">
            {curFilm.description}
          </p>
        </div>
      </div>
    );
  }
}

FilmDescription.propTypes = {
  fetchData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  curFilm: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number,
    releaseDate: PropTypes.string,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }),
};

FilmDescription.defaultProps = {
  curFilm: null,

};


const mapDispatchToProps = (dispatch) => ({
  fetchData: (id) => dispatch(retrieveMovieById(id)),
});

const mapStateToProps = (state, ownProps) => ({
  curFilm: state.curFilm,
  id: Number(ownProps.match.params.id),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDescription));
