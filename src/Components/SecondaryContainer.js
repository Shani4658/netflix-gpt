import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className='bg-black'>
      <div className='pl-2 sm:pl-12 mt-0  sm:-mt-44 relative z-20 '>
        <MovieList title={"Now Playing "} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Popular "} movies={movies.addPopularMovies}/>
        <MovieList title={"Top Rated "} movies={movies.addTopRatedMovies}/>
        <MovieList title={"Upcoming Movies "} movies={movies.addUpcomingMovies}/>

      </div>
      {/*

      MovieList - Popular
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror
       */}
    </div>
  )
}

export default SecondaryContainer