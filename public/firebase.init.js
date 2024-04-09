// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATqyud2e0jK6Ftmxci05GoCxejSgmWlhQ",
  authDomain: "fir-auth-a9.firebaseapp.com",
  projectId: "fir-auth-a9",
  storageBucket: "fir-auth-a9.appspot.com",
  messagingSenderId: "121667373137",
  appId: "1:121667373137:web:7e53dcfaf1d49f7c515070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)