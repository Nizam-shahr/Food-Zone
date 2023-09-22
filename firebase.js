// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD87CAD45NRIJbIxQickXSrSd9DRXszzGs",
  authDomain: "foodzone-7a028.firebaseapp.com",
  projectId: "foodzone-7a028",
  storageBucket: "foodzone-7a028.appspot.com",
  messagingSenderId: "702698969524",
  appId: "1:702698969524:web:d5f524bf4382cece263ae1",
  measurementId: "G-4NJ60QWKJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
