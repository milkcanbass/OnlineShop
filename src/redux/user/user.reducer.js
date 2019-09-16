import { USER_LOGIN, USER_LOGOUT } from './user.types';

const INITIAL_STATE = {
  login: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        login: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};

export default userReducer;
