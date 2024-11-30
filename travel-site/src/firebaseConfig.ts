import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMuBnel7PgGSLeSR6HbBCWK7pWZQVqkZA",
  authDomain: "react-project-a83f4.firebaseapp.com",
  projectId: "react-project-a83f4",
  storageBucket: "react-project-a83f4.firebasestorage.app",
  messagingSenderId: "438252830366",
  appId: "1:438252830366:web:bb3165bed0a08acdeec58f"
};


export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db =getFirestore(app);