import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  //console.log("posterpath",posterPath)
  return (
    <div className='w-48 pr-4'>
      <img alt='Movie-card' 
      
      src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard