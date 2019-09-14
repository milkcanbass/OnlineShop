import { SAMPLE_SUCCESS, SAMPLE_FAIL } from './sample.types';

const INITIAL_STATE = {
  sampleState: 'null',
};

const sampleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SAMPLE_SUCCESS:
      return {
        ...state,
        sampleState: payload,
      };
    case SAMPLE_FAIL:
      return {
        ...state,
        sampleState: 'Failed',
      };
    default:
      return state;
  }
};

export default sampleReducer;
