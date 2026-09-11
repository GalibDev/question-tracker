// Copy values from Firebase Console > Project settings > Your apps > Web app.
// Never put a Firebase Admin SDK/service-account key in this file.
export const firebaseConfig = {
  apiKey: "AIzaSyDLgXE0LfObMOGxV9A8QaNYEIyurKOOJus",
  authDomain: "qustion-tracker.firebaseapp.com",
  projectId: "qustion-tracker",
  storageBucket: "qustion-tracker.firebasestorage.app",
  messagingSenderId: "1020380148964",
  appId: "1:1020380148964:web:ff727b67a074aaae8768f1"
};



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgXE0LfObMOGxV9A8QaNYEIyurKOOJus",
  authDomain: "qustion-tracker.firebaseapp.com",
  projectId: "qustion-tracker",
  storageBucket: "qustion-tracker.firebasestorage.app",
  messagingSenderId: "1020380148964",
  appId: "1:1020380148964:web:ff727b67a074aaae8768f1",
  measurementId: "G-77MZM6JQ5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
