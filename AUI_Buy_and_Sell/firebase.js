import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";  // Import Firestore
import {getStorage} from "firebase/storage"; // Import Firestore



const firebaseConfig = {
  apiKey: "AIzaSyD4AS47V-iVDyOIHy_WPoYI8_lwl9e57QI",
  authDomain: "fir-auth-8f220.firebaseapp.com",
  projectId: "fir-auth-8f220",
  storageBucket: "fir-auth-8f220.appspot.com",
  messagingSenderId: "941928054937",
  appId: "1:941928054937:web:143bd33689539c8343b808"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const firebase_auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);// Export the Firestore database
const storage=getStorage(firebase_app);



export { firebase_auth, db, storage };