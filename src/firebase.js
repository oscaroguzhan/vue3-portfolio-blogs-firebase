import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
// config object from firebase console
const firebaseConfig = {
    apiKey: "AIzaSyDeBDxrU2a5SYS10bS3c_OgOONAoEbRaiI",
    authDomain: "portfolio-fireblogs.firebaseapp.com",
    projectId: "portfolio-fireblogs",
    storageBucket: "portfolio-fireblogs.appspot.com",
    messagingSenderId: "510217409123",
    appId: "1:510217409123:web:b2122e61c22011234d1e56",
    measurementId: "G-8B80LZ3EG2"
  };
  // initialize firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  export {db}