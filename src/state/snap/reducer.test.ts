import { initialState, snapReducer } from './reducer';

import { Player } from './types';
import { startNewGame } from './actions';

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
        expect(newState.players[Player.COMPUTER].cards.length).toBe(26);
        expect(newState.players[Player.HUMAN].cards.length).toBe(26);

        jest.spyOn(Math, 'random').mockRestore();
    });

    
});
