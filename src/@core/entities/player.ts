import { v4 as uuid } from 'uuid';

export class Player {
  private _id: string;
  private _name: string;
  private _gameId: string;
  private _score = 0;

  constructor(name: string) {
    if (!this._id) {
      this._id = uuid();
    }

    this._name = name;
  }

  changeName(newName: string) {
    this._name = newName;
  }

  addScore(score: number) {
    this._score += score;
  }

  joinGame(gameId: string) {
    this._gameId = gameId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  get gameId() {
    return this._gameId;
  }
}
