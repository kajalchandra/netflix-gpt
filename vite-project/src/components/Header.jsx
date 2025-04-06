import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { Netflix_logo } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) =>store.user)
  console.log("userphoto",user)
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
  return (
    <div className=' w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
      <div >
          <img src= {Netflix_logo}
          alt='netflix-logo'
          className='w-56 '></img>
      </div>
     
      {user && <div className='flex'>
        <img alt='usericon'
        className='w-11 h-11'
        src={user.photoURl}>
        </img>
        <button onClick={handleSignOut}
        className='text-white font-semibold ml-2'>(Sign Out)</button>

      </div>}
    </div>
  )
}

export default Header