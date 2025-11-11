// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcBP4haO9RDHOzj5lD2lQ0qI_NeqOa-SI",
  authDomain: "pawmart-6d54f.firebaseapp.com",
  projectId: "pawmart-6d54f",
  storageBucket: "pawmart-6d54f.firebasestorage.app",
  messagingSenderId: "243299751359",
  appId: "1:243299751359:web:bb83ac4ba381ccb1efbd0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
