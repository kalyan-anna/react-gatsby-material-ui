import { Card, CardFace, PACK_OF_CARDS, Player, SnapGameState } from './types';
import {
  computerCallsSnap as computerCallsSnapAction,
  computerTurnsCard as computerTurnsCardAction,
  humanCallsSnap as humanCallsSnapAction,
  humanTurnsCard as humanTurnsCardAction,
  startNewGame as startNewGameAction,
} from './actions';

import clonedeep from 'lodash.clonedeep';
import { createReducer } from '@reduxjs/toolkit';
import shuffle from 'lodash.shuffle';

export const initialState: SnapGameState = {
  winner: null,
  whoseTurn: null,
  whoSnapped: null,
  isPlaying: false,
  centerPile: {
    cards: [...PACK_OF_CARDS],
    matching: false,
  },
  computer: {
    cards: [],
  },

  human: {
    cards: [],
  },
};

function selectRandomPlayer(): Player {
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
  Object.assign(state, clonedeep({ ...initialState }));

  state.whoseTurn = selectRandomPlayer();
  state.isPlaying = true;
  state.centerPile.cards = [];

  const { player1Cards, player2Cards } = shuffleAndDeal([...PACK_OF_CARDS]);
  state.computer.cards = [...player1Cards];
  state.human.cards = [...player2Cards];
  return state;
}

function isMatching(cards: Card[]) {
  if (cards.length < 2) {
    return false;
  }
  const lastCard = cards[cards.length - 1];
  const lastPrevCard = cards[cards.length - 2];
  if (lastCard.rank === lastPrevCard.rank) {
    return true;
  }
  return false;
}

function humanTurnsCard(state: SnapGameState) {
  state.whoseTurn = Player.COMPUTER;
  state.whoSnapped = null;

  const playingCard = state.human.cards.pop() as Card;
  playingCard.face = CardFace.FACE_UP;

  state.centerPile.cards.push(playingCard);
  state.centerPile.matching = isMatching(state.centerPile.cards);

  if (state.human.cards.length === 0) {
    state.isPlaying = false;
    state.winner = Player.COMPUTER;
    state.whoseTurn = null;
  }
}

function humanCallsSnap(state: SnapGameState) {
  const centerPileCards = state.centerPile.cards.map(c => ({
    ...c,
    face: CardFace.FACE_DOWN,
  }));

  state.human.cards = [...centerPileCards, ...state.human.cards];

  state.centerPile.cards = [];
  state.centerPile.matching = false;
  state.whoseTurn = Player.HUMAN;
  state.whoSnapped = Player.HUMAN;
}

function computerTurnsCard(state: SnapGameState) {
  state.whoseTurn = Player.HUMAN;
  state.whoSnapped = null;

  const playingCard = state.computer.cards.pop() as Card;
  playingCard.face = CardFace.FACE_UP;

  state.centerPile.cards.push(playingCard);
  state.centerPile.matching = isMatching(state.centerPile.cards);

  if (state.computer.cards.length === 0) {
    state.isPlaying = false;
    state.winner = Player.HUMAN;
    state.whoseTurn = null;
  }
}

function computerCallsSnap(state: SnapGameState) {
  const centerPileCards = state.centerPile.cards.map(c => ({
    ...c,
    face: CardFace.FACE_DOWN,
  }));

  state.computer.cards = [...centerPileCards, ...state.computer.cards];
  state.centerPile.cards = [];
  state.centerPile.matching = false;
  state.whoseTurn = Player.COMPUTER;
  state.whoSnapped = Player.COMPUTER;
}

export const snapReducer = createReducer<SnapGameState>(
  initialState,
  builder => {
    builder.addCase(startNewGameAction, startNewGame);
    builder.addCase(humanTurnsCardAction, humanTurnsCard);
    builder.addCase(humanCallsSnapAction, humanCallsSnap);
    builder.addCase(computerTurnsCardAction, computerTurnsCard);
    builder.addCase(computerCallsSnapAction, computerCallsSnap);
  },
);
