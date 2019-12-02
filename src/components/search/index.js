import React from "react";
import { connect } from "react-redux";
import Button from "./../button";
import Filter from "../filter";
import Title from "../title";
import "./index.scss";
import { search } from "../../redux/actions";
import retrieveMovies from "../../redux/actions.js";


const mapStateToProps = state => {
  return {
       value: state.text,
       activeFilter: state.filters
  };
  
};

 class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", activeFilter: "title" };
    this.filters = [
      { id: "title", value: "Title" },
      { id: "genres", value: "Genre" }
    ];
  }

  handleChangeText = event => {
    this.setState({ value: event.target.value });
  };
  handleChangeFilter = value => {
    this.setState({ activeFilter: value });
    // if (this.state.value) {
    //   this.props.submitSearch( this.state.value , value);
    //   this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');
    // }
  };

  submitSearchEvent = event => {
    this.props.submitSearch( this.state.value , this.state.activeFilter);
    this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');

  };

  render() {
    return (
      <div className="search">
        <Title text={"FIND YOUR MOVIE"} />
        <div className="input-group">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeText}
            placeholder="Search"
          />

          <Button
            text={"Search"}
            classes={"base-button pink"}
            handleClick={this.submitSearchEvent}
            id="submitSearch"
          />
        </div>
        <Filter
          title={"Search by"}
          handleChangeFilter={this.handleChangeFilter}
          filters={this.filters}
          activeByDefault={this.state.activeFilter}
        />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submitSearch: (text, filter) => dispatch(search(text, filter)),
    fetchData: (url) => dispatch(retrieveMovies(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);