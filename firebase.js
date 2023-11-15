// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCSsQwGHP3ymb6WzCufqI_gRtnY5BlzUY",
  authDomain: "modoo-pet.firebaseapp.com",
  projectId: "modoo-pet",
  storageBucket: "modoo-pet.appspot.com",
  messagingSenderId: "631953760903",
  appId: "1:631953760903:web:f03c0415f25d1733ec0e22",
  measurementId: "G-6V2S0RC9YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;