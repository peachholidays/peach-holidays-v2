import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration using project ID: peach-holidays-website
// Note: Replace API_KEY and APP_ID from your Firebase Console for live auth.
const firebaseConfig = {
    apiKey: "AIzaSyDrfIiHL8BeHPagVW5fuFT4hShAvqC9rX8",
    authDomain: "peach-holidays-website.firebaseapp.com",
    projectId: "peach-holidays-website",
    storageBucket: "peach-holidays-website.firebasestorage.app",
    messagingSenderId: "841951302691",
    appId: "1:841951302691:web:1967294c7f81e0b8ba0d96",
    measurementId: "G-7EC1CZYBJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Handles
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
