
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BrowserRouter as Router ,Routes, Navigate  } from 'react-router-dom'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDls-EzZkdRLkdcRxAFdHuYq3lwNN_pWsQ",
  authDomain: "todo-app-12a96.firebaseapp.com",
  projectId: "todo-app-12a96",
  storageBucket: "todo-app-12a96.appspot.com",
  messagingSenderId: "440667540198",
  appId: "1:440667540198:web:368ba894fb2c71565f8927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {

        console.log(result);
        // const name = result.user.displayName
        // const email = result.user.email
        // const profilepic = result.user.photoURL

        // localStorage.setItem("name" , name)
        // localStorage.setItem("email" , email)
        // localStorage.setItem("profilepic" , profilepic)

        if(result.user.emailVerified === true)
        {
            window.location.href = "/home";
        }

    })
    .catch((err) => {
        console.log(err);
    })
}