import { UPDATE_DONATION_DATA } from './donation.types';

export const updateDonationData = payload => dispatch => {
  dispatch({ type: UPDATE_DONATION_DATA, payload });
};
