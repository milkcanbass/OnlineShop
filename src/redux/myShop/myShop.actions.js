import { UPDATE_SHOP_DATA } from './myShop.types';

export const updateShopData = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_SHOP_DATA, payload });
};
