// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO6k2gDc-EtiRCajUTjDK_Rsr_NzEWBQI",
  authDomain: "otp-project-30362.firebaseapp.com",
  projectId: "otp-project-30362",
  storageBucket: "otp-project-30362.appspot.com",
  messagingSenderId: "293288527797",
  appId: "1:293288527797:web:02299dbd7dfbb8eda47bfc",
  measurementId: "G-XTNCR9ETH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
