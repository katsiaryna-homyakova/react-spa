import React from 'react';
import './filmCard.scss';
import PropTypes from 'prop-types';

const FilmCard = ({
  imgPath, title, releaseDate, genre, rating,
}) => (
  <div className="film-card">
    <img className="card-img-top" src={imgPath} alt={title} />
    <div className="card-body row">
      <p className="col">
        <span className="card-title">{title}</span>
        <span className="text">{genre}</span>
      </p>
      <p className="col ">
        <span className="release-date">{releaseDate}</span>
        <span className="rating">{rating || '...'}</span>
      </p>
    </div>
  </div>
);

FilmCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

FilmCard.defaultProps = {
  releaseDate: '',
  rating: '',
};
export default FilmCard;
