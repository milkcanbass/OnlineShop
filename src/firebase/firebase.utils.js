import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { setCartId, setCartItems } from '../redux/cart/cart.action';
import { store } from '../redux/store';

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
      return err.message;
    }
  }
  return userRef;
};

export const convertDataSnapshotToMap = (data) => {
  const transformedItems = data.docs.map((doc) => {
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

export const donationData = (data) => {
  const transformData = data.docs.map((doc) => {
    const {
      imageUrl, name, price, id,
    } = doc.data();
    return {
      id,
      imageUrl,
      name,
      price,
    };
  });

  return transformData;
};

// Find cart by userId. creating cart if there is not. return cartId
export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    store.dispatch(setCartId(cartDocRef.id));
    store.dispatch(setCartItems([]));
  } else {
    snapShot.forEach((doc) => {
      store.dispatch(setCartId(doc.id));
      store.dispatch(setCartItems(doc.data().cartItems));
    });
  }
};

export const addItemToCart = (cartId, cartItem) => {
  console.log('addItem is triggered');
  if (!cartId || !cartItem) {
    throw 'cartId does not exist';
  } else {
    const cartDocument = firestore.collection('carts').doc(cartId);
    cartDocument
      .get()
      .then((snapShot) => snapShot.data().cartItems)
      .then((cartItems) => cartItems.find((obj) => obj.id === cartItem.id))
      .then((result) => {
        if (result) {
          // there is a same item in cart
          cartDocument.update({ cartItems: firebase.firestore.FieldValue.arrayUnion(addItem) });
        } else {
          // there is not same item in cart
          const newItem = {
            id: cartItem.id,
            name: cartItem.name,
            price: cartItem.price,
            quantity: 1,
          };
          cartDocument.update({ cartItems: newItem });
        }
      });
  }
};
