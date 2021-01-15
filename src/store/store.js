import { createStore, combineReducers } from 'redux';
import { ratesReducer } from './rates';
import { userReducer } from './user';

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer,
  })
);
