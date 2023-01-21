import { validate } from 'uuid';
import { Board } from './board';
import { Guess } from './guess';

describe('Board entity unit tests', () => {
  it('should create a new board', () => {
    const board = new Board('playerId', 'gameId');

    expect(board).toBeDefined();
    expect(board.id).toBeDefined();
    expect(validate(board.id)).toBe(true);
    expect(board.playerId).toBe('playerId');
    expect(board.gameId).toBe('gameId');
    expect(board.guesses).toHaveLength(0);
  });

  it('should be able to add new guess', () => {
    const board = new Board('playerId', 'gameId');
    const guess = new Guess('guess', board.id);

    board.addGuess(guess);

    expect(board.guesses).toHaveLength(1);
    expect(board.guesses[0]).toEqual(guess);
  });
});
