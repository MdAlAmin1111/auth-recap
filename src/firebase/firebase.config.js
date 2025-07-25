// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ4KXddJ4ZHV_eqJ7QijzAY9Gkqx6zHBc",
  authDomain: "auth-recap-57ba2.firebaseapp.com",
  projectId: "auth-recap-57ba2",
  storageBucket: "auth-recap-57ba2.firebasestorage.app",
  messagingSenderId: "935950590556",
  appId: "1:935950590556:web:d1438f0115b68c14ae7c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);