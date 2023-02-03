// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKUGaj-5t6CY6S_rMg_vAZJ6jAvl2u438",
  authDomain: "house-marketplace-app-40510.firebaseapp.com",
  projectId: "house-marketplace-app-40510",
  storageBucket: "house-marketplace-app-40510.appspot.com",
  messagingSenderId: "31381951913",
  appId: "1:31381951913:web:e3b099cacb9e87444660b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()