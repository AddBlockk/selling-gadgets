import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9SbwvxaBrBjIHEX-jDnwQb2eJQoOZjNA",
  authDomain: "selling-gadgets.firebaseapp.com",
  projectId: "selling-gadgets",
  storageBucket: "selling-gadgets.firebasestorage.app",
  messagingSenderId: "1098859829158",
  appId: "1:1098859829158:web:b32e545e3c5004f583e167",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage, auth };
