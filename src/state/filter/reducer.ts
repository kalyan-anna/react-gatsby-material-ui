import { FilterState } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { filterByKeyword } from './actions';

const initialState: FilterState = {
  filters: {
    keyword: '',
  },
};

export const filterReducer = createReducer<FilterState>(
  initialState,
  builder => {
    builder.addCase(filterByKeyword, (state, { payload }) => {
      state.filters.keyword = payload;
    });
  },
);
