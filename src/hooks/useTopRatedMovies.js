import { useDispatch , useSelector} from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovie = useSelector((state) => state?.movies?.addTopRatedMovies);
    const getTopRatedMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(()=>{
        !topRatedMovie && getTopRatedMovies();
    },[]);

};
export default useTopRatedMovies;