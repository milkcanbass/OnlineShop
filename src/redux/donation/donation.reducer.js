import { UPDATE_DONATION_DATA } from './donation.types';

const INITIAL_STATE = {
  data: [],
};
const donationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_DONATION_DATA:
      return {
        data: payload,
      };
    default:
      return state;
  }
};

export default donationReducer;
