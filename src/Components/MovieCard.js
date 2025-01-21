import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 rounded-lg'>
        <img className="" alt={'Movie Card'} src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard