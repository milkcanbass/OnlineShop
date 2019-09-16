import { MODAL_TOGGLE_WINDOW } from './modal.types';

const INITIAL_STATE = {
  modalOpen: false,
  modalType: '',
};

const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_TOGGLE_WINDOW:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        modalType: payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
