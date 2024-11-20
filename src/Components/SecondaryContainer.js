import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className='bg-black'>
      <div className='pl-12 -mt-48 relative z-20 '>
        <MovieList title={"Now Playing "} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Trending "} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Popular "} movies={movies.addPopularMovies}/>
        <MovieList title={"Romantic "} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Horror "} movies={movies.addNowPlayingMovies}/>

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