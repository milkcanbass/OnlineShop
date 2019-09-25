import { createSelector } from 'reselect';

const selectLanding = state => state.landing;

export const selectLandingData = createSelector(
  [selectLanding],
  landing => landing.landingData,
);
