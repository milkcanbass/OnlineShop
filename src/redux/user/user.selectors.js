import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectUserId = createSelector(
  [selectUserReducer],
  (user) => user.userId,
);
export const selectCartId = createSelector(
  [selectUserReducer],
  (user) => user.cartId,
);
