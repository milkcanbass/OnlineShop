import { MODAL_TOGGLE_WINDOW, MODAL_CLOSE_WINDOW } from './modal.types';
import { store } from '../store';
import { closeDropdown } from '../cart/cart.action';
import { selectDropdownOpen } from '../cart/cart.selectors';

export const modalToggleWindow = (type, message) => (dispatch) => {
  // retrieve state from reselect
  const dropdownOpen = selectDropdownOpen(store.getState());
  if (dropdownOpen === true) {
    store.dispatch(closeDropdown());
  }

  dispatch({ type: MODAL_TOGGLE_WINDOW, payload: { type, message } });
};

export const modalCloseWindow = () => (dispatch) => {
  dispatch({ type: MODAL_CLOSE_WINDOW });
};
