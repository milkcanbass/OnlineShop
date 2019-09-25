import { TOGGLE_DROPDOWN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart.types';
import { addItemToCart, removeItemFromCart } from '../../utils/cart.utils';

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
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
