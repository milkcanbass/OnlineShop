import {
  TOGGLE_DROPDOWN,
  CLOSE_DROPDOWN,
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
  dispatch({ type: SET_CART_ITEMS, payload });
};
export const setCartInitial = () => (dispatch) => {
  dispatch({ type: SET_CART_INITIAL });
};
