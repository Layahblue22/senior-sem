import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqhlELfqqa_MfUfjBSiOxqYf9ngZQ-a_s",
  authDomain: "test-e0ed4.firebaseapp.com",
  databaseURL: "https://test-e0ed4-default-rtdb.firebaseio.com",
  projectId: "test-e0ed4",
  storageBucket: "test-e0ed4.appspot.com",
  messagingSenderId: "579624731270",
  appId: "1:579624731270:web:9fd2c47121f78987bf8707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };