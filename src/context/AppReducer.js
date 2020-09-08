export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        nominatedMovies: [action.payload, ...state.nominatedMovies],
      };
    case "DELETE_MOVIE_FROM_NOMINATED":
      return {
        ...state,
        nominatedMovies: state.nominatedMovies.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
