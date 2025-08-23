// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm26ng0S8EB2BYKN5UnafXsVCa5ZANVVU",
  authDomain: "testeappeyetruck.firebaseapp.com",
  projectId: "testeappeyetruck",
  storageBucket: "testeappeyetruck.firebasestorage.app",
  messagingSenderId: "441654345844",
  appId: "1:441654345844:web:04e5d2b1a398d2412e9121",
  measurementId: "G-7WQZ7P5808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }