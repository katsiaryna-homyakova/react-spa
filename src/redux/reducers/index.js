import {
  SEARCH, ITEMS_FETCH_DATA_SUCCESS, SET_SORTING, MODIFY_CUR_SEARCH_TEXT, MODIFY_CUR_SEARCH_FILTER,
} from '../actionTypes';

const initialCurSearch = { text: '', filters: 'title' };

const initialState = {
  resultsData: [],
  curSearch: initialCurSearch,
  searchBy: { text: '', filter: 'title' },
  sortResultsBy: 'releaseDate',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchBy: {
          text: state.curSearch.text,
          filter: state.curSearch.filters,
        },
      };
    }
    case ITEMS_FETCH_DATA_SUCCESS: {
      return {
        ...state,
        resultsData: action.payload.resultsData,
        curSearch: {
          text: state.searchBy.text,
          filters: state.searchBy.filter,
        },
      };
    }
    case SET_SORTING: {
      return {
        ...state,
        sortResultsBy: action.payload.sortResultsBy,
      };
    }
    case MODIFY_CUR_SEARCH_TEXT: {
      return {
        ...state,
        curSearch: { text: action.payload.text, filters: state.curSearch.filters },
      };
    }
    case MODIFY_CUR_SEARCH_FILTER: {
      return {
        ...state,
        curSearch: { text: state.curSearch.text, filters: action.payload.filters },
      };
    }

    default:
      return state;
  }
}
