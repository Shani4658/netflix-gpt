import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  const currentMovieDetails = useSelector((store) => store.gpt?.movieDetails);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (movies?.length > 0) {
      setSelectedMovie(movies[0]); // Set first movie as default
    }
  }, [movies]);

  useEffect(() => {
    if (currentMovieDetails && currentMovieDetails.success !== false) {
      setSelectedMovie(currentMovieDetails); // Update when a movie is clicked
    }
  }, [currentMovieDetails]);

  if (!selectedMovie) return <h1>Loading...</h1>;

  // console.log("Rendering Title:", selectedMovie.original_title);

  return (
    <div className="">
      <VideoTitle className="" title={selectedMovie.original_title} overview={selectedMovie.overview} />
      <VideoBackground movieId={selectedMovie.id} />
    </div>
  );
};

export default MainContainer;
