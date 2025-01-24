import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
     
    // FILTERING VIDEO BY TYPE : trailer
    const filterData = json.results?.filter((video) => video.type === "Trailer") || [];
     
    const trailer = filterData.length ? filterData[0] : json.results[0];
      
    dispatch(movieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [movieId]);
};

export default useTrailerVideo;
