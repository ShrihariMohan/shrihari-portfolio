import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Analytics, getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOuZjMzQbjWo3FcevAl5ZQFiZshKPetQY",
  authDomain: "shrihari-personal-storage.firebaseapp.com",
  projectId: "shrihari-personal-storage",
  storageBucket: "shrihari-personal-storage.appspot.com",
  messagingSenderId: "937016095993",
  appId: "1:937016095993:web:70c4dbbc632f1c3d3d9e28"
};


let analytics: Analytics;
let db: Firestore;

if (firebaseConfig?.projectId) {
  const app = initializeApp(firebaseConfig);
  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  db = getFirestore();
}

export { db, analytics }
