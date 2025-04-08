import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainContainer = () => {
    //we want the list of movies here , which is stored in redux store
 
   const movies = useSelector((store) => store.movies?.nowPlayingMovies )
   //console.log("movie", movies)
   //this is known as early return 
    if (!movies || movies.length === 0) return ;

    //this movies contains 20 movies , but for the maincontainer i want just 1 movie

    const mainMovie = movies[0]
    console.log("main movie",mainMovie)
    const {original_title , overview , id } = mainMovie

  return (
    <div>
        <VideoTitle title={original_title} overview = {overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer