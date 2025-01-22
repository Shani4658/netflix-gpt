import React, { useState } from 'react';
import MovieCard from './MovieCard';
import useCurrentTrailerVideo from '../hooks/useCurrentTrailerVideo';
const MovieList = ({ title, movies }) => {

  const[currentMovieId , setCurrentMovieId] = useState(null);

  useCurrentTrailerVideo(currentMovieId);

  const handleMovieClick = (movieId) => {
    console.log("Movie clicked", movieId);
    setCurrentMovieId(movieId);
    console.log("Current Movie Id", currentMovieId);
  }
  
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 font-semibold text-white'>{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden rounded-lg">
        <div className='flex gap-2 '>
          {movies?.length ? (
            movies?.map(movie => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} onClick={()=>handleMovieClick(movie?.id)}/>
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
