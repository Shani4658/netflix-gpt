import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePeopleMovies from '../hooks/usePeopleMovies';
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePeopleMovies();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if(event.key === "Enter"){
        const button = document.getElementById("globalButton");
        if(button){
          button.click();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown",handleKeyPress);
    }
  },[]);
  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) :
      (
        <>
          <MainContainer />
          <SecondaryContainer />
          

        </>
      )}
      
      
    </div>
  )
}

export default Browse



