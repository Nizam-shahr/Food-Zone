import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
  const analytics = getAnalytics(app);