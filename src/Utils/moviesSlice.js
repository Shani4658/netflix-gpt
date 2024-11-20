import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        addNowPlayingMovies : null, 
        movieTrailer : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) =>{
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.addPopularMovies = action.payload;
        },
        movieTrailer : (state,action) => {
            state.movieTrailer = action.payload;
        }
    }
});

export const{addNowPlayingMovies , movieTrailer , addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;