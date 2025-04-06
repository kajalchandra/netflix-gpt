// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbun5KbjhgMKUcKFUNZ0E5FS_--1iyBr4",
  authDomain: "netflixnew-26cbb.firebaseapp.com",
  projectId: "netflixnew-26cbb",
  storageBucket: "netflixnew-26cbb.firebasestorage.app",
  messagingSenderId: "935115248457",
  appId: "1:935115248457:web:a4a3980f324e4508eec098",
  measurementId: "G-VSMSZGFXNJ",
  // databaseURL : "https://netflixnew-26cbb-default-rtdb.firebaseio.com",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();