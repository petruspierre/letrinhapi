import { v4 as uuid } from 'uuid';

export class Game {
  private _id: string;
  private _name: string;
  private _players: string[] = [];
  private _boards: string[] = [];
  private _maxPlayers = 2;

  constructor(name: string) {
    if (!this._id) {
      this._id = uuid();
    }

    this._name = name;
  }

  addBoard(boardId: string) {
    this._boards.push(boardId);
  }

  removeBoard(boardId: string) {
    this._boards = this._boards.filter((id) => id !== boardId);
  }

  addPlayer(playerId: string) {
    this._players.push(playerId);
  }

  removePlayer(playerId: string) {
    this._players = this._players.filter((id) => id !== playerId);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get players() {
    return this._players;
  }

  get maxPlayers() {
    return this._maxPlayers;
  }

  get boards() {
    return this._boards;
  }
}
