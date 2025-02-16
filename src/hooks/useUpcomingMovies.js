import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import {addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store?.movies?.addUpcomingMovies);
    const getUpcomingMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };
    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[]);
};
export default useUpcomingMovies;