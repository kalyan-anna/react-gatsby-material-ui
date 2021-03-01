import {
  updateComputerName as updateComputerNameAction,
  updateReactionTime as updateReactionTimeAction,
} from './actions';

import { createReducer } from '@reduxjs/toolkit';

export interface AppState {
  computer: {
    name: string;
    reactionTimeMs: number;
  };
}

export const initialState: AppState = {
  computer: {
    name: 'Billy',
    reactionTimeMs: 1000,
  },
};

export const appReducer = createReducer<AppState>(initialState, builder => {
  builder.addCase(updateReactionTimeAction, (state, { payload }) => {
    state.computer.reactionTimeMs = payload;
  });
  builder.addCase(updateComputerNameAction, (state, { payload }) => {
    state.computer.name = payload;
  });
});
