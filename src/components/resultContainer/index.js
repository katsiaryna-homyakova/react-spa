import React from "react";
import { connect } from "react-redux";
import FilmCard from "../filmCard";
import Filter from "../filter";
import retrieveMovies from "../../redux/actions.js";
import {setSorting} from "../../redux/actions.js";
import "./index.scss";

class FilmResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeFilter: "releaseDate", resultData: [] };
    this.filters = [
      { id: "releaseDate", value: "Release date" },
      { id: "genre", value: "Rating" }
    ];

    // this.resultData = [
    //   {
    //     imgPath: "src/images/header.jpg",
    //     title: "First title",
    //     genre: "Animation",
    //     releaseDate: "1998"
    //   },
    //   {
    //     imgPath: "src/images/header.jpg",
    //     title: "Second title",
    //     genre: "Comedy",
    //     releaseDate: "1992"
    //   },
    //   {
    //     imgPath: "src/images/header.jpg",
    //     title: "Third title",
    //     genre: "Thriller",
    //     releaseDate: "2002"
    //   },
    //   {
    //     imgPath: "src/images/header.jpg",
    //     title: "Fourth title",
    //     genre: "Comedy",
    //     releaseDate: "2009"
    //   },
    //   {
    //     imgPath: "src/images/header.jpg",
    //     title: "Fifth title",
    //     genre: "Animation",
    //     releaseDate: "2007"
    //   }
    // ];

  }
  componentDidMount() {
    // fetch("https://reactjs-cdp.herokuapp.com/movies")
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       this.setState({
    //         isLoaded: true,
    //         resultData: this.convertResponse(result.data)
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   );
    this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');
  //  this.sortData(this.resultData);
  }
  // sortByReleaseDate = array => {
  //   return [...array].sort(function(a, b) {
  //     return b.releaseDate - a.releaseDate;
  //   });
  // };
  // sortByGenre = array => {
  //   return [...array].sort(function(a, b) {
  //     return a.genre.localeCompare(b.genre);
  //   });
  // };
  // sortData = (array, criteria = this.state.activeFilter) => {
  //   if (criteria == "releaseDate") {
  //     this.setState({ resultData: this.sortByReleaseDate(array) });
  //     return;
  //   }
  //   if (criteria == "genre") {
  //     this.setState({ resultData: this.sortByGenre(array) });
  //     return;
  //   }
  // };
  handleChangeFilter = value => {
    //this.setState({ activeFilter: value });
    //this.sortData(this.state.resultData, value);
    this.props.setSorting(value);
    this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');

  };

  render() {
    if (!this.props.resultsData ) {
      return "loading"
    } else {
    return (
      <>
        <div className="result-navigarion">
          <Filter
            title={"Sort by"}
            handleChangeFilter={this.handleChangeFilter}
            filters={this.filters}
            activeFilter={this.props.sortResultsBy}
          />
        </div>
        <div className="result-section row">

          {this.props.resultsData.map((item, key) => (
            <div className="col-4" key={key}>
                <FilmCard
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
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(retrieveMovies(url)),
      setSorting: (sortBy) => dispatch(setSorting(sortBy))
  };
};

const mapStateToProps = (state) => {
  return {
    resultsData: state.resultsData, 
    sortResultsBy: state.sortResultsBy
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmResults);