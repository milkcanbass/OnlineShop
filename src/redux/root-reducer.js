import { combineReducers } from 'redux';

import sampleReducer from './sample/sample.reducer';
import modalReducer from './modal/modal.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  sample: sampleReducer,
  modal: modalReducer,
  user: userReducer,
  cart: cartReducer,
});
