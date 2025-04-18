import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-12'>
            <input type='text' 
            className=' p-4 m-4 bg-white col-span-9' 
            placeholder= {lang[langkey].gptSearchPlaceholder}></input>
            <button className='py-2 px-4 m-4 bg-red-700 text-white col-span-3 rounded-lg'>
                {lang[langkey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar