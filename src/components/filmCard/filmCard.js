import React from 'react';
import './filmCard.scss';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const FilmCard = ({
  id, imgPath, title, releaseDate, genre, rating,
}) => (
  <div className="film-card">
    <Link to={`/film/${id}`}>
      <img className="card-img-top" src={imgPath} alt={title} />
    </Link>
    <div className="card-body row">
      <p className="col">
        <span className="card-title"><Link to={`/film/${id}`}>{title}</Link></span>
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
  id: PropTypes.number.isRequired,
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
