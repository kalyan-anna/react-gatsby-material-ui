import { combineReducers } from '@reduxjs/toolkit';
import { eventReducer } from './event/reducer';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
  event: eventReducer,
  filter: filterReducer,
});

export default rootReducer;
