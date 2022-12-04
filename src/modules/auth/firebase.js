import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnUrMc85mRB5jVZXE78-UecjFs6tfyfyI",
  authDomain: "onestopauth-4ece8.firebaseapp.com",
  projectId: "onestopauth-4ece8",
  storageBucket: "onestopauth-4ece8.appspot.com",
  messagingSenderId: "399912268257",
  appId: "1:399912268257:web:67b12b9065d50ca4c2a2a0",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
