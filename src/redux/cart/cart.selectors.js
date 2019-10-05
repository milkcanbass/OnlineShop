import { createSelector } from 'reselect';

// example to specify state
const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectDropdownOpen = createSelector(
  [selectCart],
  (cart) => cart.dropdownOpen,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0),
);
