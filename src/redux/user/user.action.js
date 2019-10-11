import { SET_USER_LOGIN, SET_CART_ID } from './user.types';

export const setUserLogin = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: SET_USER_LOGIN, payload });
};

export const setCartId = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: SET_CART_ID, payload });
};
