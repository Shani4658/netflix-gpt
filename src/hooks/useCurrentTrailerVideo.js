import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../Utils/constant";
import { currentMovie } from "../Utils/gptSlice";

const useCurrentTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = useCallback(async () => {
    if(!movieId){
      return;
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();

    const filterData = data.results?.filter((video) => video.type === "Trailer") || [];
    const trailer = filterData.length ? filterData[0] : data.results?.[0];

    if(trailer){
      dispatch(currentMovie(trailer));
    }
    try{
      if(!trailer){
        console.log("No trailer found movieId ", movieId);
      }
    }
    catch(error){
      console.error("Error in getting movie video", error);
    }

  },[dispatch,movieId]);

  useEffect(() => {
    getMovieVideo();
  }, [getMovieVideo]);
}

export default useCurrentTrailerVideo;