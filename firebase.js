//firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase config object
   const firebaseConfig = {
      apiKey: "AIzaSyDukbtfDsjRQx1nHHPDIwvXpLO_6-_ctpc",
      authDomain: "dashboard-1a4b7.firebaseapp.com",
      projectId: "dashboard-1a4b7",
      storageBucket: "dashboard-1a4b7.appspot.com",
      messagingSenderId: "903212362192",
      appId: "1:903212362192:web:ba9708bae1959e9404b1d5"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

