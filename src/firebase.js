// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoc1A_0NbverOZwNoAyzgg4WYACOusYmo",
  authDomain: "youdash-cb9e9.firebaseapp.com",
  projectId: "youdash-cb9e9",
  storageBucket: "youdash-cb9e9.appspot.com",
  messagingSenderId: "622766523673",
  appId: "1:622766523673:web:106417ba26ca6927703188",
  measurementId: "G-HH2GNL5ZP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);