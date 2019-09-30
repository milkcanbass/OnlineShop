import { UPDATE_SHOP_DATA } from './myShop.types';

const INITIAL_STATE = {
  myShopData: '',
};

const myShopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SHOP_DATA:
      return {
        ...state,
        myShopData: payload,
      };
    default:
      return state;
  }
};

export default myShopReducer;
