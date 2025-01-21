import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        // After this we need to dispatch an action 
        // Visit to GptSearch.js for knowing how I dispatched this action
        addGptMovieResult: (state,action) => {
            const{movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const {toggleGptSearchView , addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;