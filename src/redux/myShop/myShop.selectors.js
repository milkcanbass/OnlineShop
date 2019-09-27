import { createSelector } from 'reselect';

const selectMyShop = state => state.myShop;

export const selectMyShopData = createSelector(
  [selectMyShop],
  myShop => myShop.myShopData,
);

export const selectMyShopDataObj = createSelector(
  [selectMyShopData],
  myShopData => Object.keys(myShopData).map(key => myShopData[key]),
);
