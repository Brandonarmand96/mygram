// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvwkx4x7d6VVwsFDs2p4ZRJyI0X97gwYU",
    authDomain: "leroi-mygram.firebaseapp.com",
    projectId: "leroi-mygram",
    storageBucket: "leroi-mygram.appspot.com",
    messagingSenderId: "1097715462102",
    appId: "1:1097715462102:web:060efefcdba260e1227e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();

const projectFirestore = getFirestore();

const timestamp = serverTimestamp()


export { projectStorage, projectFirestore, timestamp, app };