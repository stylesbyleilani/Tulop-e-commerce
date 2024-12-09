// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore, initializeFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCOjlksP9mWPlwDArFgTjOMmuqc9B1-9qs",
//   authDomain: "note-app-67c74.firebaseapp.com",
//   projectId: "note-app-67c74",
//   storageBucket: "note-app-67c74.firebasestorage.app",
//   messagingSenderId: "901127587156",
//   appId: "1:901127587156:web:abe264d976e1155112f4c1",
//   measurementId: "G-K44CRJSSRP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app)
// export const db = getFirestore(app)
// export const storage = getStorage()






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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()
