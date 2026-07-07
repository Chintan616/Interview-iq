
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-a7c65.firebaseapp.com",
  projectId: "interview-a7c65",
  storageBucket: "interview-a7c65.firebasestorage.app",
  messagingSenderId: "146400701467",
  appId: "1:146400701467:web:6de9262bab89952f3b5cbe",
  measurementId: "G-Q7NPB67YFB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }