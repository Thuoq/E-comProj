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


export const createUserProfileDocment = async (userAuth,additionalData) => {
    //console.log(userAuth)
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //console.log(additionalData)
    //console.log(snapShot);
    if(!snapShot.exists) {
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error create user",error.message);
        }
    }
    return userRef;
}


  firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({'prompt': 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;