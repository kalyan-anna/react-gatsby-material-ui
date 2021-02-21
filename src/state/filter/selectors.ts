import { RootState } from 'state/store';
import { createSelector } from '@reduxjs/toolkit';

const selectFilterState = (state: RootState) => state.filter;

const selectKeyword = createSelector(
  selectFilterState,
  ({ filters }) => filters.keyword,
);

export const filterSelectors = {
  selectKeyword,
};
