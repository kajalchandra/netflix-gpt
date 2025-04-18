
import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux"
const VideoBackground = ({movieId}) => {
  //console.log("here is the movieId",movieId)
  useMovieTrailer(movieId)
  const trailerVideo = useSelector((store)=> store.movies?. trailerVideo)



if(trailerVideo === null) return <h1>Loading...</h1>
  return (
    <div className="w-screen">
        <iframe 
        className="w-screen aspect-video"
         src= {"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
         title="YouTube video player" frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground