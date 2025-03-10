import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../Utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store?.movies?.addPopularMovies);
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[]);
};

export default usePopularMovies