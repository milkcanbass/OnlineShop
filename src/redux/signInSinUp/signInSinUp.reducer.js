import { TOGGLE_SIGNIN_PAGE } from './signInSinUp.types';

const INITIAL_STATE = {
  signIn: true,
};

const signInSinUpReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIGNIN_PAGE:
      return {
        ...state,
        signIn: !state.signIn,
      };
    default:
      return state;
  }
};

export default signInSinUpReducer;
