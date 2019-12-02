import React from "react";
import "./index.scss";
const FilmCard = ({ imgPath, title, releaseDate, genre, rating }) => (
  <div className="film-card">
    <img className="card-img-top" src={imgPath} alt={title} />
    <div className="card-body row">
      <p className="col">
        <span className="card-title">{title}</span>
        <span className="text">{genre}</span>
      </p>
      <p className="col ">
        <span className="release-date">{releaseDate}</span>
        <span className="rating">{rating? rating : "..."}</span>
      </p>
    </div>
  </div>
);
export default FilmCard;
