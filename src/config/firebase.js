import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyBHaVDehp9CLtsBPwmoQk5rVylXhrCQaVw",
  authDomain: "liya-2e0e2.firebaseapp.com",
  projectId: "liya-2e0e2",
  storageBucket: "liya-2e0e2.appspot.com",
  messagingSenderId: "657331508989",
  appId: "1:657331508989:web:86bfb5dfbaef28061b1094",
  measurementId: "G-NXBDWS2E3H"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db