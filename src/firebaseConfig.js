import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC26AZyQw9SoWhJuCNmsKtuVHc_myVJXGQ",
  authDomain: "nex-quant.firebaseapp.com",
  projectId: "nex-quant",
  storageBucket: "nex-quant.appspot.com",
  messagingSenderId: "127963022262",
  appId: "1:127963022262:web:09d9e5e1d5d8f3eedbb717",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
