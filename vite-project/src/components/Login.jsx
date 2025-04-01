import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
// full form if rafce is react arrow function export component
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const handleButtonClick = () =>{
    //validate the form data
   const msg =  checkValidate(email.current.value,password.current.value,name.current.value)
  console.log('msg',msg)
   setErrorMessage(msg)
   // console.log(email.current.value)
   // console.log(password.current.value)
   console.log(name.current.vaue)

  }
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
      <form 
      onSubmit={(e) => e.preventDefault()}
      className=' w-3/12 p-12 bg-black absolute my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-80' >
        <h1 className='font-bold text-[32px] py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input 
        ref={name}
        type='text' placeholder='Name' className='p-4 my-4 bg-gray-700 w-full'></input>}
        <input 
        ref={email}
        type='text' placeholder='Email-address ' className='p-4 my-4 bg-gray-700 w-full'></input>
        
        <input 
        ref={password}
        type='text' placeholder='password' className='p-4 my-4 bg-gray-700 w-full' ></input>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-3 my-6 bg-red-700 w-full rounded-md cursor-pointer' 
        onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now": "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login