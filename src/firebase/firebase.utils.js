import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config = {
  apiKey: "AIzaSyASEvDSrPsw5nRj0eB6gvlVxEyWpbpYH0A",
  authDomain: "crwn-clothing-db-58095.firebaseapp.com",
  projectId: "crwn-clothing-db-58095",
  storageBucket: "crwn-clothing-db-58095.appspot.com",
  messagingSenderId: "50892613296",
  appId: "1:50892613296:web:fd1121ce3aafb6d566bd75",
  measurementId: "G-R12FL2ZRDL"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error){
      console.log("error creating user", error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;