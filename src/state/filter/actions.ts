import { FILTER_BY_KEYWORD } from './types';
import { createAction } from '@reduxjs/toolkit';

export const filterByKeyword = createAction<string>(FILTER_BY_KEYWORD);
