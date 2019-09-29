import DONATION_DATA from './donation.data';

const INITIAL_STATE = {
  data: DONATION_DATA,
};

const donationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default donationReducer;
