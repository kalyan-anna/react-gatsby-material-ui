import { createAction } from '@reduxjs/toolkit';

export const updateReactionTime = createAction<number>(
  'app/updateReactionTime',
);
export const updateComputerName = createAction<string>(
  'app/updateComputerName',
);
