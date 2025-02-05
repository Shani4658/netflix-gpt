import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addPeopleMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";


const usePeopleMovies = ()=>{
    const dispatch = useDispatch();
    const getPeopleMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/person/popular",
            API_OPTIONS,
        );
        const json = await data.json();
        dispatch(addPeopleMovies(json.results));
    };
    useEffect(()=>{
        getPeopleMovies();
    },[]);

};
export default usePeopleMovies;