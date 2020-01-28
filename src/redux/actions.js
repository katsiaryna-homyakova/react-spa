import {
  SEARCH, ITEMS_FETCH_DATA_SUCCESS, MODIFY_CUR_SEARCH_FILTER, SET_SORTING,
  MODIFY_CUR_SEARCH_TEXT, ITEM_FETCH_BY_ID_SUCCESS, FETCH_FILM_BY_ID, FETCH_FILMS
} from './actionTypes';
import * as Constants from '../constants';
import { select, call, put, all, takeLatest } from 'redux-saga/effects';

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

export function retrieveMovies () {
  return {
    type: FETCH_FILMS,
    payload: {

    },
  };
}

export function* fetchFilmsAsync(action) {
const url = Constants.MOVIES_URL;
    const { searchBy, sortResultsBy } = yield select();
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
  const response = yield call(fetch, requestURL);
  const item = yield response.json();

  yield put(itemsFetchDataSuccess(item));
}



export function* watchRetrieveFilms() {
  yield takeLatest(FETCH_FILMS, fetchFilmsAsync);
}

export function retrieveMovieById (id) {
  return {
    type: FETCH_FILM_BY_ID,
    payload: {
      id: id,
    },
  };
}

export function* fetchFilmByIdAsync(action) {
  const url = `${Constants.MOVIES_URL}/${action.payload.id}`;
  const response = yield call(fetch, url);
  const item = yield response.json();

  yield put(filmFetchedByIdSuccess(item));
}



export function* watchRetrieveMovieById() {
  yield takeLatest(FETCH_FILM_BY_ID, fetchFilmByIdAsync);
}

export function* actionsSaga() {
  yield all([
    watchRetrieveFilms(),
    watchRetrieveMovieById()
  ]);
}
