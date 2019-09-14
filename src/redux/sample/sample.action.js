import { SAMPLE_SUCCESS, SAMPLE_FAIL } from './sample.types';

export const sampleAction = par => dispatch => {
  if (par.length > 0) {
    dispatch({ type: SAMPLE_SUCCESS, payload: par });
  } else {
    dispatch({ type: SAMPLE_FAIL });
  }
};
