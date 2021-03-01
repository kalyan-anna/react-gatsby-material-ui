import { CardFace, CardSuit, Player } from './types';
import { humanTurnsCard, startNewGame } from './actions';
import { initialState, snapReducer } from './reducer';

describe('snapReducer', () => {
  test('startNewGameAction', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6);

    const newState = snapReducer(initialState, startNewGame);
    expect(newState.winner).toBeNull();
    expect(newState.isPlaying).toBe(true);

    expect(newState.whoseTurn).not.toBeNull();
    expect(newState.whoseTurn).toBe(Player.COMPUTER);

    expect(newState.whoSnapped).toBeNull();
    expect(newState.centerPile.cards.length).toBe(0);
    expect(newState.centerPile.matching).toBe(false);
    expect(newState.computer.cards.length).toBe(26);
    expect(newState.human.cards.length).toBe(26);

    jest.spyOn(Math, 'random').mockRestore();
  });

  describe('humanTurnsCardAction', () => {
    test('should update whoseTurn, when it is not last card played', () => {
      const state = { ...initialState };
      state.isPlaying = true;
      state.whoseTurn = Player.HUMAN;
      state.whoSnapped = Player.COMPUTER;
      state.centerPile.cards = [];
      state.human.cards = [
        {
          id: 'd11',
          suit: CardSuit.DIAMOND,
          rank: 'J',
          face: CardFace.FACE_DOWN,
        },
        {
          id: 's13',
          suit: CardSuit.SPADE,
          rank: 'K',
          face: CardFace.FACE_DOWN,
        },
      ];

      const newState = snapReducer(state, humanTurnsCard);
      expect(newState.isPlaying).toBe(true);
      expect(newState.whoSnapped).toBeNull();
      expect(newState.whoseTurn).toBe(Player.COMPUTER);
      expect(newState.winner).toBeNull();

      expect(newState.centerPile.cards).toEqual([
        {
          id: 's13',
          suit: CardSuit.SPADE,
          rank: 'K',
          face: CardFace.FACE_UP,
        },
      ]);

      expect(newState.human.cards).toEqual([
        {
          id: 'd11',
          suit: CardSuit.DIAMOND,
          rank: 'J',
          face: CardFace.FACE_DOWN,
        },
      ]);
    });

    test('should update winner, when it is the last card played', () => {
      const state = { ...initialState };
      state.isPlaying = true;
      state.whoseTurn = Player.HUMAN;
      state.whoSnapped = Player.COMPUTER;
      state.centerPile.cards = [
        {
          id: 's13',
          suit: CardSuit.SPADE,
          rank: 'K',
          face: CardFace.FACE_UP,
        },
      ];
      state.human.cards = [
        {
          id: 'd11',
          suit: CardSuit.DIAMOND,
          rank: 'J',
          face: CardFace.FACE_DOWN,
        },
      ];

      const newState = snapReducer(state, humanTurnsCard);
      expect(newState.isPlaying).toBe(false);
      expect(newState.whoSnapped).toBeNull();
      expect(newState.whoseTurn).toBeNull();
      expect(newState.winner).toBe(Player.COMPUTER);

      expect(newState.centerPile.cards).toEqual([
        {
          id: 's13',
          suit: CardSuit.SPADE,
          rank: 'K',
          face: CardFace.FACE_UP,
        },
        {
          id: 'd11',
          suit: CardSuit.DIAMOND,
          rank: 'J',
          face: CardFace.FACE_UP,
        },
      ]);

      expect(newState.human.cards).toEqual([]);
    });
  });
});
