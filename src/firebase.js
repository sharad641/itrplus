import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import Realtime Database functions

const firebaseConfig = {
  apiKey: "AIzaSyBcMZYDe-PHpbMWHGTH9iriX9Yrs5Mllqc",
  authDomain: "itrplus-fc04f.firebaseapp.com",
  projectId: "itrplus-fc04f",
  storageBucket: "itrplus-fc04f.appspot.com",
  messagingSenderId: "634782148966",
  appId: "1:634782148966:web:d2d32252a5fb15b01780a7",
  measurementId: "G-D4NHRVHBVP",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase Realtime Database
export const database = getDatabase(app); // Initialize Realtime Database

