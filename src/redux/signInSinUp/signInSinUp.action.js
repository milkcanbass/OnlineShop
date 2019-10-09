import { TOGGLE_SIGNIN_PAGE } from './signInSinUp.types';

export const toggleSignInPage = () => (dispatch) => {
  dispatch({ type: TOGGLE_SIGNIN_PAGE });
};
