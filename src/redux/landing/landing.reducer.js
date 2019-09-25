const INITIAL_STATE = {
  landingData: [
    {
      id: 1,
      title: 'Gallery',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/shopItems%2FShincat_dr01.jpg?alt=media&token=9f23efbc-3ff7-41a3-85cb-647ccff1708b',
      size: 'large',
      linkUrl: 'shop/hats',
    },
    {
      id: 2,
      title: 'Shop',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/shopItems%2FShincat_dr02.JPG?alt=media&token=94f30a25-68bb-4b86-b88e-9b1bf0dd3b64',
      size: 'large',
      linkUrl: 'shop/hats',
    },
    {
      id: 3,
      title: 'Donation',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/jaifeimaohandagou.appspot.com/o/shopItems%2FShincat_dr03.JPG?alt=media&token=deba35b3-a06f-4fff-ae6f-d8a7ae5d2153',
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
