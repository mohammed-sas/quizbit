import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgHfqmL3UjZCwjlAaoujFZc7D6Omrcwo4",
  authDomain: "quizbit-e2f82.firebaseapp.com",
  projectId: "quizbit-e2f82",
  storageBucket: "quizbit-e2f82.appspot.com",
  messagingSenderId: "303100144785",
  appId: "1:303100144785:web:8b61b8f3c319346795a330",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
