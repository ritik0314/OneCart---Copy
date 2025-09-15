
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-e4077.firebaseapp.com",
  projectId: "loginonecart-e4077",
  storageBucket: "loginonecart-e4077.firebasestorage.app",
  messagingSenderId: "495018958984",
  appId: "1:495018958984:web:06794abf2d1d979a92bf3d"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()

export {auth,provider}
