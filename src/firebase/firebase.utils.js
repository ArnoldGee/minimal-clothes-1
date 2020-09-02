import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMREKlFbzwbcDeQec0dyg5-beHCQiysTE',
  authDomain: 'minimal-clothes-1.firebaseapp.com',
  databaseURL: 'https://minimal-clothes-1.firebaseio.com',
  projectId: 'minimal-clothes-1',
  storageBucket: 'minimal-clothes-1.appspot.com',
  messagingSenderId: '829092027243',
  appId: '1:829092027243:web:db520631b519133d17ca2e',
  measurementId: 'G-NMKWZB7BYX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // handles easy user authentication with Google.
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
