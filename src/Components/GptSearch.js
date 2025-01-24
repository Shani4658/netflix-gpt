import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BG } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 '>
        <img
          src={NETFLIX_BG}
          alt="Background"
        />  

      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
      
    </div>
  )
}

export default GptSearch;