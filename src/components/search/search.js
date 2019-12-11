import React, {Component} from "react";
import { connect } from "react-redux";
import Button from "../button/button";
import Filter from "../filter/filter";
import Title from "../title/title";
import "./search.scss";
import { search } from "../../redux/actions";
import { modifyCurSearchFilter } from "../../redux/actions";
import { modifyCurSearchText } from "../../redux/actions";
import retrieveMovies from "../../redux/actions.js";
import * as Constants from "../../constants"
//import retrieveMovies from "../../redux/actions.js";



 class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", activeFilter: "title" };
    this.filters = [
      { id: "title", value: "Title" },
      { id: "genres", value: "Genre" }
    ];
  }

  handleChangeText = event => {
    this.props.handleChangeText(event.target.value );
  };
  handleChangeFilter = value => {
    this.setState({ activeFilter: value });
    // if (this.state.value) {
    //   this.props.submitSearch( this.state.value , value);
    //   this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');
    // }
  };

  submitSearchEvent = event => {
    this.props.submitSearch( );
    this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');
   // 

  };

  render() {
    return (
      <div className="search">
        <Title text={Constants.FIND_MOVIE_TEXT} />
        <div className="input-group">
          <input
            type="text"
            value={this.props.value}
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
          handleChangeFilter={this.props.handleChangeFilter}
          filters={this.filters}
          activeFilter={this.props.activeFilter}
        />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    submitSearch: () => dispatch(search()),
    fetchData: (url) => dispatch(retrieveMovies(url)),
    handleChangeFilter: (value) => dispatch(modifyCurSearchFilter(value)),
    handleChangeText: (value) => dispatch(modifyCurSearchText(value))
  }
}


const mapStateToProps = state => {
  return {
       value: state.curSearch.text,
       activeFilter: state.curSearch.filters
  };
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);