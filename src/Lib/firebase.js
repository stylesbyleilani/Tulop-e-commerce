


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore, initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDoXJsjVAXfBh5-h3sUDgBvO8emlD7Yd7s",
  authDomain: "gadget-store-4fc83.firebaseapp.com",
  projectId: "gadget-store-4fc83",
  storageBucket: "gadget-store-4fc83.firebasestorage.app",
  messagingSenderId: "291550916611",
  appId: "1:291550916611:web:4dd9988a2ffab956159e36"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

