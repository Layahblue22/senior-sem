import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Singleton from "./singleton.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQ66K6dB2IGwMzof1EReASv4MNzP1ImhQ",
  authDomain: "senior-sem-8bb90.firebaseapp.com",
  databaseURL: "https://senior-sem-8bb90-default-rtdb.firebaseio.com",
  projectId: "senior-sem-8bb90",
  storageBucket: "senior-sem-8bb90.appspot.com",
  messagingSenderId: "410173173663",
  appId: "1:410173173663:web:51bfe53e67377b0b3457aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      const singleton = Singleton.getInstance();
      singleton.setEmail(user.email);
      singleton.setUID(user.uid);
      singleton.setToken(user.token);
      console.log(user)
      return { success: true, user: user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { success: false, message: errorMessage };
    });
}

export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      const singleton = Singleton.getInstance();
      singleton.setEmail(user.email);
      singleton.setUID(user.uid);
      singleton.setToken(user.token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { success: false, message: errorMessage };
    });
}
export function verifyFirebaseIdToken(token) {
  try {
    const decodedToken = firebase.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    throw error;
  }
}

export function createReview(restaurant, review) {
  //check if he user is signed in
  //take the users tokn,restaurant object, review object
  const singleton = Singleton.getInstance();
  const user = singleton.getUserInfo();
  console.log(user)
  //create the document in the firestore db
  fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDQ66K6dB2IGwMzof1EReASv4MNzP1ImhQ&idToken=${user.token}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // singleton.setEmail(users.email);
      // singleton.setUID(users.localid);
      // let ref = db
      //   .collection("reviews")
      //   .doc(restaurant.id)
      //   .collection("review");
      // ref
      //   .doc(users.localid)
      //   .set({
      //     email: response.users.email,
      //     stars: review.stars,
      //     description: review.description,
      //   })
      //   .then(() => {
      //     console.log("Document successfully written!");
      //     return { success: true, message: "Review successfully written" };
      //   })
      //   .catch((error) => {
      //     console.error("Error writing document: ", error);
      //     return { success: false, message: "Review not successfully written" };
      //   });
    })
    .catch((error) => {
      console.error(error);
      return { success: false, message: "Review not successfully written" };
    });
}
