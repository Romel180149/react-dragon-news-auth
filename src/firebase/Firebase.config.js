// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVo7a9I0WHJcDvB3h36NCCd3Sm7Hppx1w",
  authDomain: "react-dragon-news-auth-f1ce6.firebaseapp.com",
  projectId: "react-dragon-news-auth-f1ce6",
  storageBucket: "react-dragon-news-auth-f1ce6.appspot.com",
  messagingSenderId: "258260505448",
  appId: "1:258260505448:web:f0e2cc24a4de9b43ddbcdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;