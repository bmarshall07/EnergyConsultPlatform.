// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE0fjI0WOtjDwr2Ezex_Y6_5fX1L2_fQQ",
  authDomain: "energyconsult-7121c.firebaseapp.com",
  databaseURL: "https://energyconsult-7121c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "energyconsult-7121c",
  storageBucket: "energyconsult-7121c.appspot.com",
  messagingSenderId: "451939541892",
  appId: "1:451939541892:web:389acc4fca4a47cd8833d1",
  measurementId: "G-T5TFL800MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
