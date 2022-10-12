import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



//using a previous google cloud project
const firebaseConfig = {
  apiKey: "AIzaSyDWcLaiTyAQm3HP32iXEnawbcHO63LZ6oo",
  authDomain: "ema-john-project-f1a1f.firebaseapp.com",
  projectId: "ema-john-project-f1a1f",
  storageBucket: "ema-john-project-f1a1f.appspot.com",
  messagingSenderId: "2640187602",
  appId: "1:2640187602:web:3649ab2ebd9eba1e001d0b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;