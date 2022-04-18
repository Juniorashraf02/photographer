// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_XD0BtrKLi0CfxW3dtgfh4kMQ1nwJNo",
  authDomain: "wildlife-capturer.firebaseapp.com",
  projectId: "wildlife-capturer",
  storageBucket: "wildlife-capturer.appspot.com",
  messagingSenderId: "215320739655",
  appId: "1:215320739655:web:ffafac5b8eda4ada11d662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;