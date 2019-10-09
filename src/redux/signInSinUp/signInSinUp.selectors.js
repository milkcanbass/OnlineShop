import { createSelector } from 'reselect';

const selectSignInSinUpReducer = (state) => state.signInSinUp;

export const selectSignIn = createSelector(
  [selectSignInSinUpReducer],
  (signInSinUp) => signInSinUp.signIn,
);
