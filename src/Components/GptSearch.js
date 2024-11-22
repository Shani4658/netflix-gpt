import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BG } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
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