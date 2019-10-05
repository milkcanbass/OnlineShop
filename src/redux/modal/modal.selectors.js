import { createSelector } from 'reselect';

const selectModal = (state) => state.modal;

export const selectModalOpen = createSelector(
  [selectModal],
  (modal) => modal.modalOpen,
);

export const selectMessage = createSelector(
  [selectModal],
  (modal) => modal.message,
);
export const selectModalType = createSelector(
  [selectModal],
  (modal) => modal.modalType,
);
