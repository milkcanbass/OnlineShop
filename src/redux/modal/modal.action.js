import { MODAL_TOGGLE_WINDOW } from './modal.types';

export const modalToggleWindow = payload => dispatch => {
  console.log(payload);

  dispatch({ type: MODAL_TOGGLE_WINDOW, payload });
};
