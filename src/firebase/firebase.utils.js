import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; // If using Firebase storage
import 'firebase/auth'; // If using Firebase storage
import 'firebase/firestore'; // If using Firebase storage

const config = {
  apiKey: 'AIzaSyDI0irUHEtrSUmRX8e_1HyEMvl5kQtPbTo',
  authDomain: 'jaifeimaohandagou.firebaseapp.com',
  databaseURL: 'https://jaifeimaohandagou.firebaseio.com',
  projectId: 'jaifeimaohandagou',
  storageBucket: 'jaifeimaohandagou.appspot.com',
  messagingSenderId: '324927088238',
  appId: '1:324927088238:web:82f6486122a94532e8687f',
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
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

// function for upload local data to firebase
export const addCollectionAndDocumentsToDatabase = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // by keep .doc() as blank firebase automatically add id
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  // return await batch.commit();
};

export const convertDataSnapshotToMap = data => {
  const transformedItems = data.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      items,
    };
  });
  return transformedItems.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

export const donationData = data => {
  const transformData = data.docs.map(doc => {
    const { imageUrl, name, price, id } = doc.data();
    return {
      id,
      imageUrl,
      name,
      price,
    };
  });

  return transformData;
};
