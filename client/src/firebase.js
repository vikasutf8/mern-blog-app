// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("it is eroor",import.meta.env.API_KEY_FIREBASE )
const firebaseConfig = {
  apiKey:"AIzaSyCVMg6uCXnV0jyX2KmHC1uJXXDkfu4pNJY",
  authDomain: "mern-blog-app-fbec5.firebaseapp.com",
  projectId: "mern-blog-app-fbec5",
  storageBucket: "mern-blog-app-fbec5.appspot.com",
  messagingSenderId: "465627118483",
  appId: "1:465627118483:web:86cd2d838a95a51ba1c666"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);