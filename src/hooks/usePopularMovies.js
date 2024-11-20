import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>{
        getPopularMovies();
    },[]);
};

export default usePopularMovies