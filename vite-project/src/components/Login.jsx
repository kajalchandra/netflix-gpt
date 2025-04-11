// full form if rafce is react arrow function export component
import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
 
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()



  const handleButtonClick = () =>{
    //validate the form data
   const msg =  checkValidate(email.current.value,password.current.value)
  console.log('msg',msg)
   setErrorMessage(msg)
   // console.log(email.current.value)
   // console.log(password.current.value)
   //console.log(name.current.vaue)

   if(msg) return; // i don't want to write my whole logic in this if , so this is the good way

   if(!isSignInForm){
    // sign up logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //jaise hi we will sign up, then we will update our username
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
    }).then(() => {
      // Profile updated!
      // ...
       const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({
              uid: uid, 
              email: email,
              displayName: displayName,
              photoURL: photoURL}))
      //once my profile is updated, then navigate
      
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
    console.log("user",user)
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)
    // ..
  });
   }else{
    //sign In logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("sign user",user)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
    });
   }

  }
  const toggleSignInForm = ()=>{
      setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
     <Header/>
      <div className='absolute' >
        <img src={BG_URL}
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
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now": "Already registered. Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login