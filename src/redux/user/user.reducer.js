import { SET_USER_LOGIN } from './user.types';

const INITIAL_STATE = {
  user: null,
  cart: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
