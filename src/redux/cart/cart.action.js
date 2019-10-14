import {
  TOGGLE_DROPDOWN,
  CLOSE_DROPDOWN,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  SET_CART_ID,
  SET_CART_ITEMS,
  SET_CART_INITIAL,
} from './cart.types';

export const toggleDropdown = () => (dispatch) => {
  dispatch({ type: TOGGLE_DROPDOWN });
};
export const closeDropdown = () => (dispatch) => {
  dispatch({ type: CLOSE_DROPDOWN });
};
export const setCartId = (payload) => (dispatch) => {
  dispatch({ type: SET_CART_ID, payload });
};
export const setCartItems = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: SET_CART_ITEMS, payload });
};

export const addItem = (payload) => (dispatch) => {
  dispatch({ type: SET_CART_ITEMS, payload });
};

export const removeItem = (payload) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload });
};

export const clearItemFromCart = (payload) => (dispatch) => {
  dispatch({ type: CLEAR_ITEM_FROM_CART, payload });
};

export const setCartInitial = () => (dispatch) => {
  dispatch({ type: SET_CART_INITIAL });
};
