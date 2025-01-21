import React from 'react'
import { useSelector } from 'react-redux';
import Error from './Error';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  {/*Subscribing to our store . To do this follow this steps :
    1. import {useSelector} from react-redux
    2. const {<Name_of_the_components in gptSlice>} = useSelector((store)=> store.gpt) 
  */}

  const{movieResults , movieNames} = useSelector((store) => store.gpt);
  {/*Now I will check if movieResults is null or not . If it is null then I will show Error page else I will show the data */}
  if(!movieNames){
    return <Error />
  }
  return (
    <div className='m-2 p-2 text-white bg-black'>
      {movieNames.map((movie , index) => 
        <MovieList key={index?.id} title={movie} movies={movieResults[index]} />
      )

        
      }
    </div>
  )
}

export default GptMovieSuggestion