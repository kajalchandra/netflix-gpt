import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { Netflix_logo, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const navigate = useNavigate()
  const user = useSelector((store) =>store.user)
  //console.log("userphoto",user)
  const dispatch = useDispatch()



const handleSignOut = ()=>{
 
  signOut(auth).then(() => {
    // Sign-out successful.
    
  }).catch((error) => {
    // An error happened.
    console.log(error.message)
    navigate("/error")
  });
}
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({
        uid: uid, 
        email: email,
        displayName: displayName,
        photoURL: photoURL}))
        navigate("/browse")
     

      // ...
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    
      // ...
    }
  });
 },[])

 const  handleGptSearchClick =()=>{
  //toggle gpt search 
      dispatch(toggleGptSearchView())
 }

 const handleLanguageChange = (e)=>{
  //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
 }
  return (
    <div className=' w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div >

          <img src= {Netflix_logo}
          alt='netflix-logo'
          className='w-56 '></img>
      </div>
     
      {user && (<div className='flex'>
        { showGptSearch && 
        (<select className='p-2 m-2 bg-gray-900 text-white'
        onChange = {handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => <option 
           
           key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
{/*           
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option> */}
        </select>)}
        <button 
          onClick={handleGptSearchClick}
          className='py-2 px-4 mx-4 bg-purple-700 text-white rounded-lg'>{showGptSearch? "HomePage":"GPT Search"}</button>
        <img alt='usericon'
        className='w-11 h-11'
        src={user.photoURl}>
        </img>
        <button onClick={handleSignOut}
        className='text-white font-semibold ml-2'>(Sign Out)</button>

      </div>)}
    </div>
  )
}

export default Header