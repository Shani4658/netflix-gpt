import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import useCurrentTrailerVideo from '../hooks/useCurrentTrailerVideo';
import useMovieDetails from '../hooks/useMovieDetails';
import { useSelector } from 'react-redux';


const MovieList = ({ title, movies }) => {
  const [currentMovieId, setCurrentMovieId] = useState(null);
  

  {/*Setting up a feature where onClicking any movie from gptSearchSuggestions it will re-direct us to home*/}


  const{showGptSearch} = useSelector((store) => store?.gpt);
  console.log(showGptSearch);




  // Custom hook usage
  useCurrentTrailerVideo(currentMovieId);
  useMovieDetails(currentMovieId);
  // Handle movie click
  const handleMovieClick = (movieId) => {
    console.log("Movie clicked", movieId);
    setCurrentMovieId(movieId); // Schedule state update
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Log the updated currentMovieId when it changes
  useEffect(() => {
    if (currentMovieId !== null) {
      console.log("Current Movie Id (updated):", currentMovieId);
    }
  }, [currentMovieId]);

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden rounded-lg">
        <div className="flex gap-2">
          {movies?.length ? (
            movies?.map((movie) => (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                onClick={() =>{
                  handleMovieClick(movie?.id);
                  
                  }
                }
                
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
