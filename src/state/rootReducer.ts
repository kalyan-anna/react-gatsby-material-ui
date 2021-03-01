import { appReducer } from './app';
import { combineReducers } from '@reduxjs/toolkit';
import { snapReducer } from './snap';

const rootReducer = combineReducers({
  snap: snapReducer,
  app: appReducer,
});

export default rootReducer;
