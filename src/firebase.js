// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAt1QLrEkyzhI9vveRSL_6yxIveYsS1oKY",

  authDomain: "portfolio-of-ali.firebaseapp.com",

  projectId: "portfolio-of-ali",

  storageBucket: "portfolio-of-ali.appspot.com",

  messagingSenderId: "335237796727",

  appId: "1:335237796727:web:d7542d37e223df618e4772",

  measurementId: "G-Y26MS4EWR8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);