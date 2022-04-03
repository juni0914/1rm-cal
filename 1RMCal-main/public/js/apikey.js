// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzzovSzzC7NyerNWlViKgNTvQ0kDp_a6k",
  authDomain: "rm-cal.firebaseapp.com",
  databaseURL: "https://rm-cal-default-rtdb.firebaseio.com",
  projectId: "rm-cal",
  storageBucket: "rm-cal.appspot.com",
  messagingSenderId: "575034816656",
  appId: "1:575034816656:web:350949347769f2ba2d8015",
  measurementId: "G-DFFMY9V19W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);