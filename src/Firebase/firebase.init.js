// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD2ZdGOgBvHfVw1XrFYq5yaG5tYoTVe2Y",
  authDomain: "react-auth-integration-12e3c.firebaseapp.com",
  projectId: "react-auth-integration-12e3c",
  storageBucket: "react-auth-integration-12e3c.firebasestorage.app",
  messagingSenderId: "1048052854728",
  appId: "1:1048052854728:web:4a425df5e21f2ba2059afd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
