import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  nominatedMovies: localStorage.getItem("nominatedMovies") ? JSON.parse(localStorage.getItem("nominatedMovies")) : []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('nominatedMovies', JSON.stringify(state.nominatedMovies))
  }, [state])
  const addMovieToNominated = movie => {
    dispatch({ type: "ADD_MOVIE", payload: movie })
  }
  return (
    <GlobalContext.Provider value={{ nominatedMovies: state.nominatedMovies, addMovieToNominated }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
