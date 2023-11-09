import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import "firebase/auth"; 
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgSVyJd1IZhbtZBr6kjENDztfcSifZRUA",
  authDomain: "kyvingus.firebaseapp.com",
  databaseURL: "https://kyvingus-default-rtdb.firebaseio.com",
  projectId: "kyvingus",
  storageBucket: "kyvingus.appspot.com",
  messagingSenderId: "1021380057668", 
  appId: "1:1021380057668:web:4afc7eea047556e8d6ba11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore()



export { app, auth, db };