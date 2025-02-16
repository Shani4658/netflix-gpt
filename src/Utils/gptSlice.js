import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    currentMovie: null,
    movieDetails: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    currentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    movieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

// Export the correct action creators
export const { toggleGptSearchView, addGptMovieResult, currentMovie, movieDetails } = gptSlice.actions;

export default gptSlice.reducer;
