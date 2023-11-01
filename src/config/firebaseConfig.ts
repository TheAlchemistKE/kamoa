import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfoZgOYbIyO6KmU4dHqF-7W4RHOzaS7mc",
  authDomain: "kamoa-e4f8d.firebaseapp.com",
  projectId: "kamoa-e4f8d",
  storageBucket: "kamoa-e4f8d.appspot.com",
  messagingSenderId: "404161061808",
  appId: "1:404161061808:web:2c6d0dc01b92f0e715ac75",
  measurementId: "G-6R99PGWV78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const blobStorage = getStorage(app);
