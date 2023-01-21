import { Guess } from './guess';

describe('Guess entity unit tests', () => {
  it('should create a guess', () => {
    const word = 'test';
    const boardId = 'boardId';

    const guess = new Guess(word, boardId);

    expect(guess.id).toBeDefined();
    expect(guess.word).toEqual(word);
    expect(guess.points).toEqual(0);
  });

  it('should calculate points', () => {
    const word = 'test';
    const boardId = 'boardId';

    const guess = new Guess(word, boardId);

    guess.calculatePoints('test');

    expect(guess.points).toEqual(4);
  });
});
