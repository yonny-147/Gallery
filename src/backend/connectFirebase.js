// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRH9bdvaeHEO85N0nAGaG6I0DN1sTO_Y",
  authDomain: "gallery-bc4a8.firebaseapp.com",
  projectId: "gallery-bc4a8",
  storageBucket: "gallery-bc4a8.appspot.com",
  messagingSenderId: "614296730644",
  appId: "1:614296730644:web:40c4b87c3bd72528dabb01"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase