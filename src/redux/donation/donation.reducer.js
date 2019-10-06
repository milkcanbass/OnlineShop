import { UPDATE_DONATION_DATA } from './donation.types';

const INITIAL_STATE = {
  data: [
    {
      id: 100,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fart01.jpg?alt=media&token=57944c36-d899-4879-9ab4-3ef89fd84dc2',
      name: '$1 donation',
      price: 1,
    },
  ],
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
