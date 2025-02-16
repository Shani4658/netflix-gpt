// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3apl6asVeBx9sfSwQgv01rMgCdpl6q7Q",
  authDomain: "netflix-gpt-d6fda.firebaseapp.com",
  projectId: "netflix-gpt-d6fda",
  storageBucket: "netflix-gpt-d6fda.appspot.com",
  messagingSenderId: "196216263843",
  appId: "1:196216263843:web:056ebadb1ad55dc1ff5b16",
  measurementId: "G-EZG58JDV1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);