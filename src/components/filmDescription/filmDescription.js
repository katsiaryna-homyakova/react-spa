import React from 'react';
import './filmDescription.scss';
import PropTypes from 'prop-types';

const FilmDescription = ({
  imgPath, title, rating, duration, releaseDate, genre, description,
}) => (
  <div className="film-description row">

    <img className="image-cover col-3" src={imgPath} alt={title} />
    <div className="col-9">
      <p className="film-description-block-title">
        <span className="film-description-title">{title}</span>
        <span className="rating">{rating}</span>
      </p>
      <p className="genre">{genre}</p>
      <p className="date-and-duration ">
        <span className="highlight date">
          {releaseDate}
          {' '}
        </span>
year
        <span className="highlight duration">
          {duration}
          {' '}
        </span>
min
      </p>
      <p className="description ">
        {description}
      </p>
    </div>
  </div>
);

FilmDescription.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number,
  releaseDate: PropTypes.string,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

FilmDescription.defaultProps = {
  releaseDate: '',
  rating: '',
  duration: '',
};
export default FilmDescription;
