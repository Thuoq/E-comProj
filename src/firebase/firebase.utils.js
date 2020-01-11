import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuPZm8YqSSahSTlkUPRoXi_9czuXG41XE",
    authDomain: "project-eco-db.firebaseapp.com",
    databaseURL: "https://project-eco-db.firebaseio.com",
    projectId: "project-eco-db",
    storageBucket: "project-eco-db.appspot.com",
    messagingSenderId: "970040247512",
    appId: "1:970040247512:web:35e0d697f2a8a16cd743ad",
    measurementId: "G-4XVJ04KV70"
  };


  firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({'prompt': 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;