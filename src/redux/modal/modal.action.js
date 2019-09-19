import { MODAL_TOGGLE_WINDOW, MODAL_CLOSE_WINDOW } from './modal.types';

export const modalToggleWindow = (type, message) => dispatch => {
  dispatch({ type: MODAL_TOGGLE_WINDOW, payload: { type, message } });
};

export const modalCloseWindow = () => dispatch => {
  dispatch({ type: MODAL_CLOSE_WINDOW });
};
