import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBjF1xJSsd7ycfg4cWS9vDcNUE6oPnf6MU",
  authDomain: "tiktok---jornada-17bc6.firebaseapp.com",
  projectId: "tiktok---jornada-17bc6",
  storageBucket: "tiktok---jornada-17bc6.appspot.com",
  messagingSenderId: "1073838464825",
  appId: "1:1073838464825:web:93656336ec2b6b170452e8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;