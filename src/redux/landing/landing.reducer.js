const INITIAL_STATE = {
  landingData: [
    {
      id: 1,
      title: 'Gallery',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fart01.jpg?alt=media&token=e94c344c-de48-4afd-a58b-012c48b9c778',
      size: 'large',
      linkUrl: 'shop/hats',
    },
    {
      id: 2,
      title: 'Shop',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fshopping01.jpg?alt=media&token=cf733d6f-4be2-4920-8c26-75f281aba7c3',
      size: 'large',
      linkUrl: 'shop/hats',
    },
    {
      id: 3,
      title: 'Donation',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/webImages%2Fdonation01.jpg?alt=media&token=0975af83-5279-4de4-ba58-bf1345a18dbc',
      size: 'large',
      linkUrl: 'shop/hats',
    },
  ],
};

const landingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default landingReducer;
