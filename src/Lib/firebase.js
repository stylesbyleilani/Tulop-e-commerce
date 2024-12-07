// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOjlksP9mWPlwDArFgTjOMmuqc9B1-9qs",
  authDomain: "note-app-67c74.firebaseapp.com",
  projectId: "note-app-67c74",
  storageBucket: "note-app-67c74.firebasestorage.app",
  messagingSenderId: "901127587156",
  appId: "1:901127587156:web:abe264d976e1155112f4c1",
  measurementId: "G-K44CRJSSRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()

