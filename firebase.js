import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJ7BYWy-K511h3UNGzhAgVHLl-o7Uu2Q",
  authDomain: "touski-8e1ba.firebaseapp.com",
  projectId: "touski-8e1ba",
  storageBucket: "touski-8e1ba.appspot.com",
  messagingSenderId: "791503343458",
  appId: "1:791503343458:web:5439e3a1440bd982d5663b",
  measurementId: "G-FE7TL5WQFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
