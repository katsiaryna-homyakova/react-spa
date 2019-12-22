import {
  SEARCH, ITEMS_FETCH_DATA_SUCCESS, MODIFY_CUR_SEARCH_FILTER, SET_SORTING,
  MODIFY_CUR_SEARCH_TEXT, ITEM_FETCH_BY_ID_SUCCESS,
} from './actionTypes';
import * as Constants from '../constants';


export const search = () => ({
  type: SEARCH,
  payload: {
  },
});

export const setSorting = (sortBy) => ({
  type: SET_SORTING,
  payload: {
    sortResultsBy: sortBy,
  },
});


function convertResponse(data) {
  return data.map((item) => ({
    id: item.id,
    imgPath: item.poster_path,
    title: item.title,
    genre: item.genres.join(' & '),
    releaseDate: item.release_date,
    rating: item.vote_average,
  }));
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    payload: {
      resultsData: convertResponse(items.data),
    },
  };
}
function convertResponseItem(item) {
  return {
    id: item.id,
    imgPath: item.poster_path,
    title: item.title,
    genre: item.genres.join(' & '),
    releaseDate: item.release_date,
    rating: item.vote_average,
    description: item.overview,
    duration: item.runtime,
  };
}
export function filmFetchedByIdSuccess(item) {
  return {
    type: ITEM_FETCH_BY_ID_SUCCESS,
    payload: {
      curFilm: convertResponseItem(item),
    },
  };
}

export function modifyCurSearchFilter(value) {
  return {
    type: MODIFY_CUR_SEARCH_FILTER,
    payload: {
      filters: value,
    },
  };
}

export function modifyCurSearchText(value) {
  return {
    type: MODIFY_CUR_SEARCH_TEXT,
    payload: {
      text: value,
    },
  };
}
export function retrieveMovies() {
  return (dispatch, getState) => {
    const url = Constants.MOVIES_URL;
    const { searchBy, sortResultsBy } = getState();
    const urlParameters = {};
    // search=The&searchBy=title
    const sortMap = { releaseDate: 'release_date', genre: 'vote_average' };
    if (searchBy && searchBy.text && searchBy.filter) {
      urlParameters.search = searchBy.text;
      urlParameters.searchBy = searchBy.filter;
    }
    if (sortResultsBy) {
      urlParameters.sortBy = sortMap[sortResultsBy];
      urlParameters.sortOrder = 'desc';
    }
    const requestURL = `${url}?${new URLSearchParams(urlParameters)}`;
    fetch(requestURL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => 'error');
  };
}

export function retrieveMovieById(id) {
  return (dispatch) => {
    const url = `${Constants.MOVIES_URL}/${id}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((item) => dispatch(filmFetchedByIdSuccess(item)))
      .catch(() => 'error');
  };
}
