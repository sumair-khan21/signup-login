// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
 

//firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_v8TGaI2hc7C_MI1fBWN26XVH3C-TnBM",
  authDomain: "loginsignup-16d09.firebaseapp.com",
  projectId: "loginsignup-16d09",
  storageBucket: "loginsignup-16d09.appspot.com",
  messagingSenderId: "339241092286",
  appId: "1:339241092286:web:56a9dfc2dae4ab20128aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db , auth}