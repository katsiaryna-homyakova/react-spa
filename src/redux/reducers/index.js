//export default function rootReducer () {}

import { combineReducers } from "redux";
import searchReducer from "./search";
import { SEARCH,  SORT_BY_DATE } from "../actionTypes";
//import todos from "./todos";

//export default combineReducers({ searchReducer});


const initialState = {
    resultsData: [],
    searchBy: {},
    sortResultsBy: "releaseDate"
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH: {
        const { text, filter } = action.payload;
        return {
          ...state,
          searchBy: {
              text: text,
              filter: filter
          }
  
        
        //  resultsData: state.resultsData
        };
      };
      case "ITEMS_FETCH_DATA_SUCCESS": {
        console.log("reducer: " + action.payload.resultsData)
        return {
          ...state,
          resultsData: action.payload.resultsData
        }
      };
      case "SET_SORTING": {
        return {
          ...state,
          sortResultsBy: action.payload.sortResultsBy
        }
      }
     
      default:
        return state;
    }
  }