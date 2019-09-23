import { TOGGLE_DROPDOWN, ADD_ITEM } from './cart.types';
import { addItemToCart } from '../../utils/cart.utils';

const INITIAL_STATE = {
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
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
