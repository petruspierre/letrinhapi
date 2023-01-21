import { Player } from './player';

describe('Player unit tests', () => {
  it('should create a player', () => {
    const name = 'test';
    const player = new Player(name);

    expect(player.id).toBeDefined();
    expect(player.name).toEqual(name);
    expect(player.score).toEqual(0);
  });

  it('should change name', () => {
    const name = 'test';
    const newName = 'new name';
    const player = new Player(name);

    player.changeName(newName);

    expect(player.name).toEqual(newName);
  });

  it('should add score', () => {
    const name = 'test';
    const player = new Player(name);

    player.addScore(10);

    expect(player.score).toEqual(10);
  });

  it('should join game', () => {
    const name = 'test';
    const gameId = 'gameId';
    const player = new Player(name);

    player.joinGame(gameId);

    expect(player.gameId).toEqual(gameId);
  });
});
