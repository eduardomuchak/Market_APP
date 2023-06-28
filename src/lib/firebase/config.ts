import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBus-P9qnP4tQdX3fao2_hlIF3ReZEtuU0',
  authDomain: 'market-shopping-app.firebaseapp.com',
  projectId: 'market-shopping-app',
  storageBucket: 'market-shopping-app.appspot.com',
  messagingSenderId: '116992852883',
  appId: '1:116992852883:web:952d7a3121bd1c271e5e66',
  measurementId: 'G-SDKB57GDC7',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
