import { createSelector } from 'reselect';

const selectUserReducer = state => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  user => user.user,
);
