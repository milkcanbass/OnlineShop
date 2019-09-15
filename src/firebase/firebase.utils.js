const firebase = require('firebase/app');
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
export const addNewUserWithEmailAndPassword = () => {
  console.log('addNew fired');

  firebase
    .auth()
    .createUserWithEmailAndPassword('b@gmail.com', '123456')
    .catch(err => {
      console.log(err.code);
      console.log(err.message);
    });
};
