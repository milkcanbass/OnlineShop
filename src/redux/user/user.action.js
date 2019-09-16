import { USER_LOGOUT, USER_LOGIN } from './sample.types';

export const userLogin = () => dispatch => {
  if (par.length > 0) {
    dispatch({ type: USER_LOGIN });
  } else {
    dispatch({ type: USER_OUT });
  }
};
