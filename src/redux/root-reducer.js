import { combineReducers } from 'redux';

import sampleReducer from './sample/sample.reducer';

export default combineReducers({
  sample: sampleReducer,
});
