import { TOGGLE_DROPDOWN } from './cart.types';

const INITIAL_STATE = {
  dropdownOpen: false,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_DROPDOWN: {
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
