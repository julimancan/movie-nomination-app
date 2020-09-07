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
  
  const deleteMovieFromNominated = (imdbID) => {
    dispatch({ type: "DELETE_MOVIE_FROM_NOMINATED", payload: imdbID });
  }

  return (
    <GlobalContext.Provider value={{ nominatedMovies: state.nominatedMovies, addMovieToNominated, deleteMovieFromNominated }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
