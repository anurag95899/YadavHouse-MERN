// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'realestateproject-123.firebaseapp.com',
  projectId: 'realestateproject-123',
  storageBucket: 'realestateproject-123.appspot.com',
  messagingSenderId: '82655199831',
  appId: '1:82655199831:web:3a1f470b466b9428cb1912',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
