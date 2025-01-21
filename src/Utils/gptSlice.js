import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        // After this we need to dispatch an action 
        // Visit to GptSearch.js for knowing how I dispatched this action
        addGptMovieResult: (state,action) => {
            state.gptMovies = action.payload;
        }
    },
});

export const {toggleGptSearchView , addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;