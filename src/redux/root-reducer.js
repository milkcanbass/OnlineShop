import { combineReducers } from 'redux';

import sampleReducer from './sample/sample.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
  sample: sampleReducer,
  modal: modalReducer,
});
