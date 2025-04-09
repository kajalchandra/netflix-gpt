import React from 'react'
import MovieList from './movieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  if(movies===null) return
  return (
    <div className='bg-black'>
     <div className='-mt-52 pl-12 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Trending"} movies={movies.popularMovies}/>
          <MovieList title={"Popular"} movies={movies.topRatedMovies}/>
          <MovieList title={"upcoming Movies"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
     </div>
      
    </div>
  )
}

export default SecondaryContainer