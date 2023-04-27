import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDQ66K6dB2IGwMzof1EReASv4MNzP1ImhQ",
  authDomain: "senior-sem-8bb90.firebaseapp.com",
  databaseURL: "https://senior-sem-8bb90-default-rtdb.firebaseio.com",
  projectId: "senior-sem-8bb90",
  storageBucket: "senior-sem-8bb90.appspot.com",
  messagingSenderId: "410173173663",
  appId: "1:410173173663:web:51bfe53e67377b0b3457aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };