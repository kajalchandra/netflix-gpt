import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black aspect-video '>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white px-12 py-4 text-black text-lg rounded-lg hover:opacity-90'>▶️ Play</button>
            <button className='bg-gray-600 px-12 py-4  text-lg rounded-lg ml-5'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle