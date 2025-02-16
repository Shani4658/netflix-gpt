import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant';
import { movieDetails } from '../Utils/gptSlice';


const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();  
  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(movieDetails(json));
  };
  useEffect(()=>{
    getMovieDetails();
  },[movieId]);                                                           
}

export default useMovieDetails