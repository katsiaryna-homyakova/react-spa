import React from "react";
import FilmCard from "../filmCard";
import Filter from "../filter";
import "./index.scss";

export default class FilmResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeFilter: "releaseDate", resultData: [] };
    this.filters = [
      { id: "releaseDate", value: "Release date" },
      { id: "genre", value: "Genre" }
    ];

    this.resultData = [
      {
        imgPath: "src/images/header.jpg",
        title: "First title",
        genre: "Animation",
        releaseDate: "1998"
      },
      {
        imgPath: "src/images/header.jpg",
        title: "Second title",
        genre: "Comedy",
        releaseDate: "1992"
      },
      {
        imgPath: "src/images/header.jpg",
        title: "Third title",
        genre: "Thriller",
        releaseDate: "2002"
      },
      {
        imgPath: "src/images/header.jpg",
        title: "Fourth title",
        genre: "Comedy",
        releaseDate: "2009"
      },
      {
        imgPath: "src/images/header.jpg",
        title: "Fifth title",
        genre: "Animation",
        releaseDate: "2007"
      }
    ];

  }
  componentDidMount() {
    this.sortData(this.resultData);
  }
  sortByReleaseDate = array => {
    return [...array].sort(function(a, b) {
      return b.releaseDate - a.releaseDate;
    });
  };
  sortByGenre = array => {
    return [...array].sort(function(a, b) {
      return a.genre.localeCompare(b.genre);
    });
  };
  sortData = (array, criteria = this.state.activeFilter) => {

    if (criteria == "releaseDate") {
      this.setState({ resultData: this.sortByReleaseDate(array) });
      return;
    }
    if (criteria== "genre") {
      this.setState({ resultData: this.sortByGenre(array) });
      return;
    }
  };
  formatData = () => {
    let formatedArray = [];
    let curIndex = -1;

    for (let index = 0; index < this.state.resultData.length; index++) {
      if (index % 3 == 0) {
        formatedArray.push([]);
        curIndex++;
      }
      formatedArray[curIndex].push(this.state.resultData[index]);
    }
    return formatedArray;
  };

  handleChangeFilter = value => {
 
    this.setState({ activeFilter: value });
    this.sortData(this.state.resultData, value);
  };

  renderRow = array => {
    const elments = array.map((element, index) => (
      <FilmCard
        imgPath={element.imgPath}
        title={element.title}
        genre={element.genre}
        releaseDate={element.releaseDate}
        key={index}
      />
    ));

    return elments;
  };
  render() {
    return (
      <>
        <div className="result-navigarion">
          <Filter
            title={"Sort by"}
            handleChangeFilter={this.handleChangeFilter}
            filters={this.filters}
            activeByDefault={this.state.activeFilter}
          />
        </div>
        <div className="result-section">
          {this.formatData().map((item, key) => (
            <div className="row" key={key}>
              {this.renderRow(item)}
            </div>
          ))}
        </div>
      </>
    );
  }
}
