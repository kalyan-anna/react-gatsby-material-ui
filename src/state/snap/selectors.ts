import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selectSnapGameState = (state: RootState) => state.snap;

const whoseTurn = createSelector(
  selectSnapGameState,
  ({ whoseTurn }) => whoseTurn,
);

const whoSnapped = createSelector(
  selectSnapGameState,
  ({ whoSnapped }) => whoSnapped,
);

const isPlaying = createSelector(
  selectSnapGameState,
  ({ isPlaying }) => isPlaying,
);

const winner = createSelector(selectSnapGameState, ({ winner }) => winner);

const centerPileCards = createSelector(
  selectSnapGameState,
  ({ centerPile }) => centerPile.cards,
);

const isMatching = createSelector(
  selectSnapGameState,
  ({ centerPile }) => centerPile.matching,
);

const computerCards = createSelector(
  selectSnapGameState,
  ({ computer }) => computer.cards,
);

const humanCards = createSelector(
  selectSnapGameState,
  ({ human }) => human.cards,
);

export const snapSelector = {
  whoseTurn,
  whoSnapped,
  isPlaying,
  winner,
  centerPileCards,
  isMatching,
  computerCards,
  humanCards,
};
