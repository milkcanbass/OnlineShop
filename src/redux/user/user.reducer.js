import { SET_USER_LOGIN, SET_CART_ID } from './user.types';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        userId: payload,
      };
    case SET_CART_ID: {
      return {
        ...state,
        cartId: payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
