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
    apiKey: "AIzaSyBL2FyQsZq-5tSLd__qkA-5hgbn4KoeRig",
    authDomain: "daiverse-c2807.firebaseapp.com",
    projectId: "daiverse-c2807",
    storageBucket: "daiverse-c2807.appspot.com",
    messagingSenderId: "877728472026",
    appId: "1:877728472026:web:6ad61b0cbcf118e9e1fee3",
    measurementId: "G-N5HFRKL253"
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