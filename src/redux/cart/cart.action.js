import { TOGGLE_DROPDOWN, ADD_ITEM } from './cart.types';

export const toggleDropdown = () => dispatch => {
  dispatch({ type: TOGGLE_DROPDOWN });
};

export const addItem = payload => dispatch => {
  dispatch({ type: ADD_ITEM, payload });
};
