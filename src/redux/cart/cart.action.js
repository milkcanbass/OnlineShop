import { TOGGLE_DROPDOWN } from './cart.types';

export const toggleDropdown = () => dispatch => {
  dispatch({ type: TOGGLE_DROPDOWN });
};
