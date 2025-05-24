import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCM_9UFl70t5xf0tqJsgpbCBAR0TR7WnDA",
  authDomain: "dhanush-inn.firebaseapp.com",
  projectId: "dhanush-inn",
  storageBucket: "dhanush-inn.firebasestorage.app",
  messagingSenderId: "190424193497",
  appId: "1:190424193497:web:fcdff173f59e49e87a21c8",
  measurementId: "G-ETJHLWG57L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
