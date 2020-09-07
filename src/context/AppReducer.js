export default (state, action) => {
  switch(action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        nominatedMovies: [action.payload, ...state.nominatedMovies]
      }
    default:
      return state;
  }
};