import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Qexl_tILKZk3-9FNTMK_1gL_KdERYu8",
  authDomain: "e-park-b0a4f.firebaseapp.com",
  projectId: "e-park-b0a4f",
  storageBucket: "e-park-b0a4f.appspot.com",
  messagingSenderId: "976331237017",
  appId: "1:976331237017:web:d22581fe1f099fdfb7fa08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
