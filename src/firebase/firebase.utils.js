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

export const addItemToCart = (cartId, newItem) => {
  if (!cartId || !newItem) {
    throw 'cartId does not exist';
  }
  let userId;
  let cartItems;
  const cartDocument = firestore.collection('carts').doc(cartId);
  cartDocument
    .get()
    .then((snapShot) => {
      userId = snapShot.data().userId;
      cartItems = snapShot.data().cartItems;
    })
    .then(() => {
      const itemExisting = cartItems.find((cartItem) => cartItem.id === newItem.id);
      let itemCase;
      const newCart = [];
      if (itemExisting) {
        cartItems.map((item) => {
          if (item.id === newItem.id) {
            itemCase = {
              id: item.id,
              imageUrl: item.imageUrl,
              name: item.name,
              price: item.price,
              quantity: item.quantity + 1,
            };
          } else {
            itemCase = {
              ...item,
            };
          }
          newCart.push(itemCase);
        });
        cartDocument.set({ userId, cartItems: newCart });
      } else {
        const itemCase = {
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        };
        // new Item
        cartDocument.update({
          cartItems: firebase.firestore.FieldValue.arrayUnion(itemCase),
        });
      }
      // For updateCart
    })
    .then(() => cartDocument.get())
    .then((snapShot) => {
      store.dispatch(setCartItems(snapShot.data().cartItems));
    })
    .catch((err) => console.log(err.message));
};

export const reduceItemFromCart = (cartId, newItem) => {
  if (!cartId || !newItem) {
    throw 'cartId does not exist';
  }
  let userId;
  let cartItems;
  let itemCase;
  const newCart = [];
  const cartDocument = firestore.collection('carts').doc(cartId);
  cartDocument
    .get()
    .then((snapShot) => {
      userId = snapShot.data().userId;
      cartItems = snapShot.data().cartItems;
    })
    .then(() => {
      cartItems.map((item) => {
        if (item.id === newItem.id) {
          if (item.quantity === 1) {
            return null;
          }
          itemCase = {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            price: item.price,
            quantity: item.quantity - 1,
          };
        } else {
          itemCase = {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          };
        }
        newCart.push(itemCase);
      });
      console.log(newCart);
      cartDocument.set({ cartItems: newCart, userId });
    })
    .then(() => cartDocument.get())
    .then((snapShot) => {
      console.log(snapShot.data().cartItems);
      store.dispatch(setCartItems(snapShot.data().cartItems));
    })
    .catch((err) => console.log(err.message));
};

export const removeItemFromCart = (cartId, newItem) => {
  if (!cartId || !newItem) {
    throw 'cartId does not exist';
  }
  let userId;
  let cartItems;
  let itemCase;
  const newCart = [];
  const cartDocument = firestore.collection('carts').doc(cartId);
  cartDocument
    .get()
    .then((snapShot) => {
      userId = snapShot.data().userId;
      cartItems = snapShot.data().cartItems;
    })
    .then(() => {
      cartItems.map((item) => {
        if (item.id === newItem.id) {
          return null;
        }
        itemCase = {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        };

        newCart.push(itemCase);
      });
      console.log(newCart);
      cartDocument.set({ cartItems: newCart, userId });
    })
    .then(() => cartDocument.get())
    .then((snapShot) => {
      console.log(snapShot.data().cartItems);
      store.dispatch(setCartItems(snapShot.data().cartItems));
    })
    .catch((err) => console.log(err.message));
};
