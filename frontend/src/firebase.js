// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnqNtwC_htF2Q4FTHLYKt9JJfnDieY89U",
  authDomain: "fraudshield-da0c5.firebaseapp.com",
  projectId: "fraudshield-da0c5",
  storageBucket: "fraudshield-da0c5.firebasestorage.app",
  messagingSenderId: "170120465646",
  appId: "1:170120465646:web:281d9ddcd5cea0af0ab7ff",
  measurementId: "G-54E0DT2VJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
