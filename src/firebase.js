import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBarlW_TqjsnapU-PV37gFJx3gmAPL3ukc",
  authDomain: "chat-a8435.firebaseapp.com",
  projectId: "chat-a8435",
  storageBucket: "chat-a8435.appspot.com",
  messagingSenderId: "10012860372",
  appId: "1:10012860372:web:b4c253ae27fab0950a0041"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
