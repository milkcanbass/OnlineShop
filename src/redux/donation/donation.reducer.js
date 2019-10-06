import { UPDATE_DONATION_DATA } from './donation.types';

const INITIAL_STATE = {
  data: [
    {
      id: 100,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fart01.jpg?alt=media&token=e94c344c-de48-4afd-a58b-012c48b9c778',
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
