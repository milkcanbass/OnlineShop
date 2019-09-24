import { createSelector } from 'reselect';

const selectModal = state => state.modal;

export const selectModalOpen = createSelector(
  [selectModal],
  modal => modal.modalOpen,
);
