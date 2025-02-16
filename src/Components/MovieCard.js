import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterPath , onClick}) => {
  
  if(!posterPath){
    return null;
  }
  return (
    <div className='w-24 sm:w-48 rounded-lg' onClick={onClick}>
        <img className="" alt={'Movie Card'} src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard