import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATF4dq6loeROPGgvyxUMtA_RUNGXK2n4M",
    authDomain: "visit-nova.firebaseapp.com",
    databaseURL: "https://visit-nova-default-rtdb.firebaseio.com",
    projectId: "visit-nova",
    storageBucket: "visit-nova.firebasestorage.app",
    messagingSenderId: "142594773497",
    appId: "1:142594773497:web:990a2c8e8494d201bd2d28",
    measurementId: "G-T28PP3LXYP"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
