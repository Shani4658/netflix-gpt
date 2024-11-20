import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies); // Log the entire array
  console.log(movies?.[0]); // Log the first element safely

  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 font-semibold text-white'>{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden rounded-lg">
        <div className='flex gap-2 '>
          {movies?.length ? (
            movies?.map(movie => (
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
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
