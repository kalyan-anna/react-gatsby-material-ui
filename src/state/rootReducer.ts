import { combineReducers } from '@reduxjs/toolkit';
import {snapReducer} from './snap';

const rootReducer = combineReducers({
  snap: snapReducer,
});

export default rootReducer;
