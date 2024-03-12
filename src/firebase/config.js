// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import firebase from "firebase/compat/app";

const app = firebase.initializeApp( {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "growtechieind-2024.firebaseapp.com",
  projectId: "growtechieind-2024",
  storageBucket: "growtechieind-2024.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
});

// Initialize Firebase
const db = app.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { app, auth, db, googleAuthProvider, storage };
