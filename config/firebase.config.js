// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4FXCRKoPt3YpDnQet-VzxYWUd9Dm5RDE",
    authDomain: "rebid-app.firebaseapp.com",
    projectId: "rebid-app",
    storageBucket: "rebid-app.appspot.com",
    messagingSenderId: "771034808785",
    appId: "1:771034808785:web:a46ebef75c40adcc5760f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

const db = getFirestore(app);
export { authentication, db };