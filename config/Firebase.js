// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDce23J808QMfEcg8uK-fi11GriQnNFxU4",
  authDomain: "furnistore-a235c.firebaseapp.com",
  projectId: "furnistore-a235c",
  storageBucket: "furnistore-a235c.appspot.com",
  messagingSenderId: "478713563038",
  appId: "1:478713563038:web:e1e0f4e419605c7e89f88f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
AsyncStorage.setItem('app',JSON.stringify(app))

export const auth = getAuth(app)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3wXQpy0p8Za9TU6ZctvF4-N-YQTyVaaI",
//   authDomain: "logins-8b835.firebaseapp.com",
//   projectId: "logins-8b835",
//   storageBucket: "logins-8b835.appspot.com",
//   messagingSenderId: "975171874814",
//   appId: "1:975171874814:web:397f7d2e61b11342da5aaf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);