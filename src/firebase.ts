import {initializeApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCQ9xD3_pFwZzB4BtFKq_0GESP8I09VM58",
  authDomain: "captain-a48af.firebaseapp.com",
  projectId: "captain-a48af",
  storageBucket: "captain-a48af.appspot.com",
  messagingSenderId: "360444067221",
  appId: "1:360444067221:web:3f8dd49a70985060674a9c",
  measurementId: "G-QK3ERTVLXJ"
};

initializeApp(firebaseConfig);

console.info("Key", import.meta.env.VITE_FIREBASE_API_KEY)
console.info("Loaded Firebase")
