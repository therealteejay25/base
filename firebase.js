// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoFwjmYcmndX4HBeqLkzrJODCqjUKE98E",
  authDomain: "base-1468b.firebaseapp.com",
  projectId: "base-1468b",
  storageBucket: "base-1468b.appspot.com", // Fixed storage bucket domain
  messagingSenderId: "423186820027",
  appId: "1:423186820027:web:e8f8de5125ab904bebb29e",
  measurementId: "G-6B60PH7TJ2",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional, can be removed if unused)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { db, analytics };
