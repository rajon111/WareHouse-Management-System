// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjgbrazvu3HUuj-V8BxVTE6dbBq16ZdUI",
  authDomain: "sports-warehouse-management.firebaseapp.com",
  projectId: "sports-warehouse-management",
  storageBucket: "sports-warehouse-management.appspot.com",
  messagingSenderId: "886476107568",
  appId: "1:886476107568:web:a1b59f7bab56483971e2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;