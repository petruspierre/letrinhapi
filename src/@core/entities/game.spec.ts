import { validate } from 'uuid';
import { Game } from './game';

describe('Game entity unit tests', () => {
  it('should create a new game', () => {
    const game = new Game('gameName');
    expect(game).toBeDefined();
    expect(game.id).toBeDefined();
    expect(validate(game.id)).toBe(true);
    expect(game.name).toBe('gameName');
    expect(game.players).toHaveLength(0);
    expect(game.boards).toHaveLength(0);
    expect(game.maxPlayers).toBe(2);
  });

  it('should be able to add new player', () => {
    const game = new Game('gameName');
    const playerId = 'playerId';

    game.addPlayer(playerId);

    expect(game.players).toHaveLength(1);
    expect(game.players[0]).toBe(playerId);
  });

  it('should be able to remove player', () => {
    const game = new Game('gameName');
    const playerId = 'playerId';

    game.addPlayer(playerId);
    game.removePlayer(playerId);

    expect(game.players).toHaveLength(0);
  });

  it('should be able to add new board', () => {
    const game = new Game('gameName');
    const boardId = 'boardId';

    game.addBoard(boardId);

    expect(game.boards).toHaveLength(1);
    expect(game.boards[0]).toBe(boardId);
  });

  it('should be able to remove board', () => {
    const game = new Game('gameName');
    const boardId = 'boardId';

    game.addBoard(boardId);
    game.removeBoard(boardId);

    expect(game.boards).toHaveLength(0);
  });
});
