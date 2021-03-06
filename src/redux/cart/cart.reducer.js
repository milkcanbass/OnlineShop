import {
  TOGGLE_DROPDOWN,
  CLOSE_DROPDOWN,
  SET_CART_ID,
  SET_CART_ITEMS,
  SET_CART_INITIAL,
} from './cart.types';

const INITIAL_STATE = {
  cartId: '',
  dropdownOpen: false,
  cartItems: [],
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
    case CLOSE_DROPDOWN: {
      return {
        ...state,
        dropdownOpen: false,
      };
    }
    case SET_CART_ID: {
      return {
        ...state,
        cartId: payload,
      };
    }
    case SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: payload,
      };
    }
    case SET_CART_INITIAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default cartReducer;
