//export default function rootReducer () {}

import { combineReducers } from "redux";
import searchReducer from "./search";
import { SEARCH,  SORT_BY_DATE } from "../actionTypes";
//import { stat } from "fs";
//import todos from "./todos";

//export default combineReducers({ searchReducer});
const initialCurSearch = {text: '', filters:'title'}

const initialState = {
    resultsData: [],
    curSearch:initialCurSearch,
    searchBy:  {text: '', filter:'title'},
    sortResultsBy: "releaseDate"
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH: {
       // const { text, filter } = action.payload;
        return {
          ...state,
          searchBy: {
              text: state.curSearch.text,
              filter:  state.curSearch.filters
          }
  
        
        //  resultsData: state.resultsData
        };
      };
      case "ITEMS_FETCH_DATA_SUCCESS": {
        console.log("reducer: " + action.payload.resultsData)
        return {
          ...state,
          resultsData: action.payload.resultsData,
          curSearch: {
            text: state.searchBy.text,
            filters:  state.searchBy.filter
          }
        }
      };
      case "SET_SORTING": {
        return {
          ...state,
          sortResultsBy: action.payload.sortResultsBy,
        }
      };
      case "MODIFY_CUR_SEARCH_TEXT": {
        return {
          ...state,
          curSearch:{text: action.payload.text, filters:state.curSearch.filters}
        }
      };
      case "MODIFY_CUR_SEARCH_FILTER": {
        return {
          ...state,
          curSearch:{text: state.curSearch.text, filters:action.payload.filters}
        }
      }
     
      default:
        return state;
    }
  }