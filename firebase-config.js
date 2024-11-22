import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIfcXOs3fdIl0KYZEIqMAUpPPiQuad3zk",
    authDomain: "e-commerce-2d942.firebaseapp.com",
    projectId: "e-commerce-2d942",
    storageBucket: "e-commerce-2d942.firebasestorage.app",
    messagingSenderId: "233741888071",
    appId: "1:233741888071:web:2276db8956442a827e1f62",
    measurementId: "G-YCBWHYL0ZK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);