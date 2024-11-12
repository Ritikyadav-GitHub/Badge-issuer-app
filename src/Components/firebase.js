// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf03f3g9eC8yTlDs0LuqyM1gjBZPn2tqQ",
  authDomain: "badge-issueing.firebaseapp.com",
  projectId: "badge-issueing",
  storageBucket: "badge-issueing.firebasestorage.app",
  messagingSenderId: "56310134686",
  appId: "1:56310134686:web:527bafa99bf02f75c8088f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);
export default app;