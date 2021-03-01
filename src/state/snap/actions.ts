import { createAction } from "@reduxjs/toolkit";

export const startNewGame = createAction("snap/startNewGame");

export const humanTurnsCard = createAction('snap/humanTurnsCard');
export const humanCallsSnap = createAction('snap/humanCallsSnap');

export const computerTurnsCard = createAction('snap/computerTurnsCard');
export const computerCallsSnap = createAction('snap/computerCallsSnap');
