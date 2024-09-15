import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlbAdjKEyqBxZ_IrNgcb_Unq1xtX1b-vs",
  authDomain: "phishingexample-a1337.firebaseapp.com",
  projectId: "phishingexample-a1337",
  storageBucket: "phishingexample-a1337.appspot.com",
  messagingSenderId: "793187286137",
  appId: "1:793187286137:web:4b35d2664137b1ba4668a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, };