import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        addNowPlayingMovies : null, 
        movieTrailer : null,
        addPopularMovies: null,
        addTopRatedMovies: null,
        addUpcomingMovies: null,
        addPeopleMovies: null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) =>{
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.addPopularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.addTopRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.addUpcomingMovies = action.payload;
        },
        addPeopleMovies : (state,action) => {
            state.addPeopleMovies = action.payload;
        },
        movieTrailer : (state,action) => {
            state.movieTrailer = action.payload;
        }
    }
});

export const{addNowPlayingMovies , movieTrailer , addPopularMovies , addTopRatedMovies , addUpcomingMovies , addPeopleMovies} = moviesSlice.actions;
export default moviesSlice.reducer;