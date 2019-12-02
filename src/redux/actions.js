import { SEARCH,  SORT_BY_DATE } from "./actionTypes";



export const search = (text, filter)=> {
    console.log({
      text: text,
      filter: filter
    });
  return {
  type: SEARCH,
  payload: {
    text: text,
    filter: filter
  }
}};

export const setSorting = (sortBy)=> {

return {
type: "SET_SORTING",
payload: {
  sortResultsBy: sortBy
}
}};


function convertResponse (data) {
  return data.map(item => {
    return {
      imgPath: item.poster_path,
      title: item.title,
      genre: item.genres.join(' & '),
      releaseDate: item.release_date,
      rating: item.vote_average
    };
  });
};

export function itemsFetchDataSuccess(items) {
  console.log( convertResponse(items.data));
  return {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      payload: {
        resultsData: convertResponse(items.data)
      }
  };
}
export default function retrieveMovies(url) {
  return (dispatch, getState) => {
     // dispatch(itemsIsLoading(true));
     const { searchBy, sortResultsBy } = getState();
     let urlParameters ={};
     //search=The&searchBy=title
     const sortMap = {releaseDate: 'release_date', genre: 'vote_average' }
     if (searchBy && searchBy.text && searchBy.filter) {
     urlParameters.search = searchBy.text;
     urlParameters.searchBy = searchBy.filter;
     }
     if (sortResultsBy) {
     urlParameters.sortBy = sortMap[sortResultsBy];
     urlParameters.sortOrder = 'desc';
     }
let requestURL = url  +'?'  + new URLSearchParams(urlParameters)
      fetch(requestURL)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

            //  dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => {return "error"});
  };
}