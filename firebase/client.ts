// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoz2aqTErJexELpJldwcimR2eco8dbhOg",
  authDomain: "prepwise69.firebaseapp.com",
  projectId: "prepwise69",
  storageBucket: "prepwise69.firebasestorage.app",
  messagingSenderId: "181926889083",
  appId: "1:181926889083:web:bbc3dde26b8f8ea72244de",
  measurementId: "G-TKSNRGXP50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);