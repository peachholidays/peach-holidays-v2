import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration using project ID: peach-holidays-website
// Note: Replace API_KEY and APP_ID from your Firebase Console for live auth.
const firebaseConfig = {
    apiKey: "REPLACE_WITH_YOUR_FIREBASE_API_KEY",
    authDomain: "peach-holidays-website.firebaseapp.com",
    projectId: "peach-holidays-website",
    storageBucket: "peach-holidays-website.firebasestorage.app",
    messagingSenderId: "841951302691",
    appId: "REPLACE_WITH_YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Handles
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
