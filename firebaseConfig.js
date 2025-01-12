// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE0fjI0WOtjDwr2Ezex_Y6_5fX1L2_fQQ",
  authDomain: "energyconsult-7121c.firebaseapp.com",
  databaseURL: "https://energyconsult-7121c-default-rtdb.europe-west1.firebasedatabase.app", // Corrected URL
  projectId: "energyconsult-7121c",
  storageBucket: "energyconsult-7121c.appspot.com",
  messagingSenderId: "451939541892",
  appId: "1:451939541892:web:389acc4fca4a47cd8833d1",
  measurementId: "G-T5TFL800MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

// Export database and storage for use in other files
export { db, storage };
