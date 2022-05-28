import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDibIzUlyfEJLndQL3TfDKk4nNCKgwocO0",
  authDomain: "pysonshop-a3289.firebaseapp.com",
  projectId: "pysonshop-a3289",
  storageBucket: "pysonshop-a3289.appspot.com",
  messagingSenderId: "1082708668364",
  appId: "1:1082708668364:web:e7533ac0cf8853e8b37769"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
