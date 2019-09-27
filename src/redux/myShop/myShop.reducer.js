import MY_SHOP_DATA from './myShopData';

const INITIAL_STATE = {
  myShopData: MY_SHOP_DATA,
};

const myShopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default myShopReducer;
