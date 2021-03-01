import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectAppState = (state: RootState) => state.app;

const reactionTime = createSelector(
  selectAppState,
  ({ computer }) => computer.reactionTimeMs,
);

const computerName = createSelector(
  selectAppState,
  ({ computer }) => computer.name,
);

export const appSelector = {
  reactionTime,
  computerName,
};
