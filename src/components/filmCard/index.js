import React from "react";
import "./index.scss";
const FilmCard = ({ imgPath, title, releaseDate, genre }) => (
  <div className="film-card col-4">
    <img className="card-img-top" src={imgPath} alt={title} />
    <div className="card-body row">
      <p className="col">
        <span className="card-title">{title}</span>
        <span className="text">{genre}</span>
      </p>
      <p className="col ">
        <span className="release-date">{releaseDate}</span>
      </p>
    </div>
  </div>
);
export default FilmCard;
