import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
