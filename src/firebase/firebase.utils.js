import * as firebase from 'firebase';

require('firebase/auth');
require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyBLkU2Be7DEZ-UqhoMeWcgNYrvQJxZB7dU',
  authDomain: 'jiafeimaostore.firebaseapp.com',
  databaseURL: 'https://jiafeimaostore.firebaseio.com',
  projectId: 'jiafeimaostore',
  storageBucket: '',
  messagingSenderId: '81113062888',
  appId: '1:81113062888:web:01e013645daed80055d85d',
};
// Initialize Firebase
firebase.initializeApp(config);

// Auth function with Email and Password;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addNewUserWithEmailAndPassword = () => {
  auth.createUserWithEmailAndPassword('b@gmail.com', '123456').catch(err => {
    // send err message to client
    console.log(err.code);
    console.log(err.message);
  });
};

// Auth function with Google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogleAccount = () => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      const token = result.credential.accessToken;
      const user = result.user;
    })
    .catch(err => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const createUserProfDoc = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.collection('users').doc(userAuth.uid);
  const snapShot = await userRef.get();
  console.log(snapShot);
};
