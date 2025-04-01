import React, { useState } from 'react'
import Header from './Header'
// full form if rafce is react arrow function export component
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
      setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
     <Header/>
      <div className='absolute' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg'
        alt='background'></img>
      </div>
      <form className=' w-3/12 p-12 bg-black absolute my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-80' >
        <h1 className='font-bold text-[32px] py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 bg-gray-700 w-full'></input>}
        <input type='text' placeholder='Email-address ' className='p-4 my-4 bg-gray-700 w-full'></input>
        
        <input type='text' placeholder='password' className='p-4 my-4 bg-gray-700 w-full' ></input>
        <button className='p-3 my-6 bg-red-700 w-full rounded-md cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now": "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login