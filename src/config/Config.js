import  firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAc6hTeAsX7g8a2atLT6QJNQujBQRO7dEQ",
  authDomain: "rafi-products.firebaseapp.com",
  projectId: "rafi-products",
  storageBucket: "rafi-products.appspot.com",
  messagingSenderId: "924361087404",
  appId: "1:924361087404:web:cb6bacda5c4b43943b8209"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }