import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = (movieId)=>{
      const dispatch = useDispatch()
        //console.log(movieId)
        useEffect(()=>{
         getMovieVideos()
       },[])
     
       const getMovieVideos = async ()=>{
        
         const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US',API_OPTIONS)
         const json = await data.json()
         //console.log("moive data",json.results)
     
         
       const filterData = json.results.filter((video) => video.type === "Trailer")
       // if i cannot find trailer , if the filterData has trailer video then give me the first one from filterdata
       //and i could not find any then give me the first video from json.results
     
       const trailer = filterData.length?filterData[0] : json.results[0];
       //console.log("trailer",trailer)
       //i dispatched the trailer to the store
       dispatch(addTrailerVideo(trailer))
       //and to get the trailer i will subscribe to the store
     
      // console.log("trailer",trailer)
       }
     
}

export default useMovieTrailer