import { Player } from './types';
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

const winner = createSelector(
    selectSnapGameState,
    ({winner}) => winner
)

const centerPileCards = createSelector(
  selectSnapGameState,
  ({ centerPile }) => centerPile.cards,
);

const isMatching = createSelector(
    selectSnapGameState,
    ({centerPile}) => centerPile.matching
)

const selectComputer = createSelector(
    selectSnapGameState,
    ({players}) => players[Player.COMPUTER]
)

const computerCards = createSelector(selectComputer, ({cards}) => cards);

const selectHuman = createSelector(
  selectSnapGameState,
  ({ players }) => players[Player.HUMAN],
);

const humanCards = createSelector(selectHuman, ({ cards }) => cards);

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
