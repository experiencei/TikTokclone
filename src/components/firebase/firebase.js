import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1r2wDrPXuDyimNWQft0-K0D25YlWzVxo",
    authDomain: "tiktokclone-5ebec.firebaseapp.com",
    projectId: "tiktokclone-5ebec",
    storageBucket: "tiktokclone-5ebec.appspot.com",
    messagingSenderId: "749713008292",
    appId: "1:749713008292:web:7d0f8458fd1adada79e831"
  };

  firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();