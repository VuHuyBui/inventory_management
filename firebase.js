// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5hhHZN5umxsVl4AH1m4FfEEvtXkgYdQE",
  authDomain: "inventory-management-d69d4.firebaseapp.com",
  projectId: "inventory-management-d69d4",
  storageBucket: "inventory-management-d69d4.appspot.com",
  messagingSenderId: "432336055924",
  appId: "1:432336055924:web:21a7b71d419f091f876b21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}