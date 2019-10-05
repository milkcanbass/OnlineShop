import { createSelector } from 'reselect';

const selectDonation = (state) => state.donation;

export const selectDonations = createSelector(
  [selectDonation],
  (donation) => donation.data,
);
