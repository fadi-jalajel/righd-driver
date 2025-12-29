// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Zzu3aOJGfmHmDRf9laDEHDsCigsGIDE",
  authDomain: "righd-driver-dev.firebaseapp.com",
  projectId: "righd-driver-dev",
  storageBucket: "righd-driver-dev.firebasestorage.app",
  messagingSenderId: "1074595568002",
  appId: "1:1074595568002:web:0b54453f6322acd772d79b"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
