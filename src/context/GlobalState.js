import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  nominatedMovies: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToNominated = movie => {
    dispatch({ type: "ADD_MOVIE", payload: movie })
  }
  return (
    <GlobalContext.Provider value={{ nominatedMovies: state.nominatedMovies, addMovieToNominated }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
