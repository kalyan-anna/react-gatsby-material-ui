import { Card, PACK_OF_CARDS, Player, SnapGameState } from './types';

import { createReducer } from '@reduxjs/toolkit';
import shuffle from 'lodash.shuffle';
import { startNewGame as startNewGameAction } from './actions';

export const initialState: SnapGameState = {
  winner: null,
  whoseTurn: null,
  whoSnapped: null,
  isPlaying: false,
  centerPile: {
    cards: PACK_OF_CARDS,
    matching: false,
  },
  players: {
    [Player.COMPUTER]: {
      cards: [],
    },
    [Player.HUMAN]: {
      cards: [],
    },
  },
};

function selectRandomPlayer(): Player {
  console.log('radon:', Math.round(Math.random()));
  return Math.round(Math.random()) ? Player.COMPUTER : Player.HUMAN;
}

function shuffleAndDeal(
  pack: Card[],
): { player1Cards: Card[]; player2Cards: Card[] } {
  const shuffledPack: Card[] = shuffle(pack);
  
  return shuffledPack.reduce(
    (accumulator: any, item: Card, index: number) => {
      index % 2
        ? accumulator.player1Cards.push(item)
        : accumulator.player2Cards.push(item);

      return accumulator;
    },
    { player1Cards: [], player2Cards: [] },
  );
}

function startNewGame(state: SnapGameState) {
  Object.assign(state, { ...initialState });

  state.whoseTurn = selectRandomPlayer();
  state.isPlaying = true;
  state.centerPile = {
    ...state.centerPile,
    cards: [],
  };
  const { player1Cards, player2Cards } = shuffleAndDeal(PACK_OF_CARDS);
  state.players[Player.COMPUTER].cards = player1Cards;
  state.players[Player.HUMAN].cards = player2Cards;
};

export const snapReducer = createReducer<SnapGameState>(
  initialState,
  builder => {
    builder.addCase(startNewGameAction, startNewGame);
  },
);
