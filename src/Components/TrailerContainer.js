import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';

const TrailerContainer = () => {
  const movie = useSelector((store)=> store?.gpt?.currentMovie);
  if(!movie)return;
  console.log(movie);

  return (
    <div>
      
    </div>
  )
}

export default TrailerContainer