import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  const currentMovie = useSelector((store) => store.gpt?.currentMovie);
  const currentMovieDetails = useSelector((store) => store.gpt?.movieDetails);

  if(!movies && !currentMovie)return;
  
  
  if(currentMovieDetails){
    const {original_title , overview , id} = currentMovieDetails;
    return(
      <div>
        <VideoTitle title = {original_title} overview = {overview} />
        <VideoBackground movieId={id}/>
      </div>
    )
  }
    
  const mainMovie = movies[0];
  const{original_title , overview , id} = mainMovie;
  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
