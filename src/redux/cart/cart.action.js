import {
  TOGGLE_DROPDOWN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM,
} from './cart.types';

export const toggleDropdown = () => (dispatch) => {
  dispatch({ type: TOGGLE_DROPDOWN });
};

export const addItem = (payload) => (dispatch) => {
  dispatch({ type: ADD_ITEM, payload });
};

export const removeItem = (payload) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload });
};

export const clearItemFromCart = (payload) => (dispatch) => {
  dispatch({ type: CLEAR_ITEM_FROM_CART, payload });
};
