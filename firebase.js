// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4AS47V-iVDyOIHy_WPoYI8_lwl9e57QI",
  authDomain: "fir-auth-8f220.firebaseapp.com",
  projectId: "fir-auth-8f220",
  storageBucket: "fir-auth-8f220.appspot.com",
  messagingSenderId: "941928054937",
  appId: "1:941928054937:web:143bd33689539c8343b808"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
