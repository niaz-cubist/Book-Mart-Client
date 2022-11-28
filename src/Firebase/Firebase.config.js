// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDWiFWaDtr5VT80VRTdzbvI1Rp8yJW5yRA",
  authDomain: "book-mart-awesome.firebaseapp.com",
  projectId: "book-mart-awesome",
  storageBucket: "book-mart-awesome.appspot.com",
  messagingSenderId: "854687546693",
  appId: "1:854687546693:web:f0f54b0aae8444840a122c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;