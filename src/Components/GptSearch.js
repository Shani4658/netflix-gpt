import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BG } from '../Utils/constant'


const GptSearch = () => {
  return (
    <>
      <div className='absolute -z-10 '>
        <img
          className='w-screen h-screen object-cover'
          src={NETFLIX_BG}
          alt="Background"
        />  
        
      </div>
      
      <div className='pt-[-20%]'>
        
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
      
    </>
  )
}

export default GptSearch;