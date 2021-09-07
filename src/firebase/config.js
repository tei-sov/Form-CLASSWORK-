// import { firestore } from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe5STr8DmviYBWxmdxO9OIiogrKNyEZPY",
  authDomain: "codetrainproject-4eb35.firebaseapp.com",
  projectId: "codetrainproject-4eb35",
  storageBucket: "codetrainproject-4eb35.appspot.com",
  messagingSenderId: "972162311115",
  appId: "1:972162311115:web:50c5e9d7e7390a0ef30c4e",
  measurementId: "G-09WGJFRG1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore(firebaseConfig);

export default app;
