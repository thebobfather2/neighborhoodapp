// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkZkum45PvomzsnxR860bcmASqT3KaMYE",
  authDomain: "neighborhood-fe092.firebaseapp.com",
  databaseURL: "https://neighborhood-fe092-default-rtdb.firebaseio.com",
  projectId: "neighborhood-fe092",
  storageBucket: "neighborhood-fe092.appspot.com",
  messagingSenderId: "646527279541",
  appId: "1:646527279541:web:580ee2938b86bf0333b9fc",
  measurementId: "G-DDDH1N8R2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
