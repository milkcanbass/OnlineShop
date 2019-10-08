import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // store data to localStorage

import modalReducer from './modal/modal.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import landingReducer from './landing/landing.reducer';
import myShopReducer from './myShop/myShop.reducer';
import donationReducer from './donation/donation.reducer';

const persistConfig = {
  key: 'root', // what point you need to enable to store the reducer(state) from
  storage: sessionStorage,
  whitelist: ['cart', 'myShop', 'donation'], // what reducer you want to store
};

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  cart: cartReducer,
  landing: landingReducer,
  myShop: myShopReducer,
  donation: donationReducer,
});

export default persistReducer(persistConfig, rootReducer);
