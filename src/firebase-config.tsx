import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2tS9olV2T_jzCS7GxlczFdkiLyP5ivDc",
  authDomain: "quiz-app-e5cc4.firebaseapp.com",
  projectId: "quiz-app-e5cc4",
  storageBucket: "quiz-app-e5cc4.appspot.com",
  messagingSenderId: "603883892604",
  appId: "1:603883892604:web:f37b9570ff2b72201e7ef9",
  measurementId: "G-Q5VSCFW7YB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
