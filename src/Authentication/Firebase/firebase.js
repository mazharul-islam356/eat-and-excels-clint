// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHYhHV3AiDe8BmfL8O1czcodc6xEw_8AA",
  authDomain: "assingment-12-d89cd.firebaseapp.com",
  projectId: "assingment-12-d89cd",
  storageBucket: "assingment-12-d89cd.appspot.com",
  messagingSenderId: "727059621899",
  appId: "1:727059621899:web:45d5100322364f8efc7f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;