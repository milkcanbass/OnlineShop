import PAGE_ASSETS_DATA from './pageAssetsData';

const INITIAL_STATE = {
  landingData: PAGE_ASSETS_DATA,
};

const landingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default landingReducer;
