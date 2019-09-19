import { MODAL_TOGGLE_WINDOW, MODAL_CLOSE_WINDOW } from './modal.types';

const INITIAL_STATE = {
  modalOpen: false,
  modalType: '',
  message: '',
};

const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_TOGGLE_WINDOW:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        modalType: payload.type,
        message: payload.message,
      };
    case MODAL_CLOSE_WINDOW:
      return {
        ...state,
        modalOpen: false,
        modalType: '',
        message: '',
      };
    default:
      return state;
  }
};

export default modalReducer;
