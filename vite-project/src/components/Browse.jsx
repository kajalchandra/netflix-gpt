
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import Header from './Header'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'






const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  console.log('gpt',showGptSearch)
  
 useNowPlayingMovies()
 usePopularMovies()
 useTopRatedMovies()


  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearchPage/>:<>
        <MainContainer/>
      <SecondaryContainer/>
      </>}
     
      
    </div>
  )
}

export default Browse