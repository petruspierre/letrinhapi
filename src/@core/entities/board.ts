import { v4 as uuid } from 'uuid';

import { Guess } from './guess';

export class Board {
  private _id: string;
  private _guesses: Guess[] = [];
  private _playerId: string;
  private _gameId: string;

  constructor(playerId: string, gameId: string) {
    if (!this._id) {
      this._id = uuid();
    }

    this._playerId = playerId;
    this._gameId = gameId;
    this._guesses = [];
  }

  addGuess(guess: Guess) {
    this._guesses.push(guess);
  }

  get id() {
    return this._id;
  }

  get guesses() {
    return this._guesses;
  }

  get playerId() {
    return this._playerId;
  }

  get gameId() {
    return this._gameId;
  }
}
