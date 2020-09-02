import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCMREKlFbzwbcDeQec0dyg5-beHCQiysTE",
  authDomain: "minimal-clothes-1.firebaseapp.com",
  databaseURL: "https://minimal-clothes-1.firebaseio.com",
  projectId: "minimal-clothes-1",
  storageBucket: "minimal-clothes-1.appspot.com",
  messagingSenderId: "829092027243",
  appId: "1:829092027243:web:db520631b519133d17ca2e",
  measurementId: "G-NMKWZB7BYX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;