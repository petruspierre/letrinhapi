import { v4 as uuid } from 'uuid';

export class Guess {
  private _id: string;
  private _word: string;
  private _boardId: string;
  private _points = 0;

  constructor(word: string, boardId: string) {
    if (!this._id) {
      this._id = uuid();
    }

    this._word = word;
    this._boardId = boardId;
  }

  calculatePoints(correctWord: string) {
    let points = 0;

    for (let i = 0; i < correctWord.length; i++) {
      if (correctWord[i] === this._word[i]) {
        points++;
      }
    }

    this._points = points;
  }

  get id() {
    return this._id;
  }

  get points() {
    return this._points;
  }

  get word() {
    return this._word;
  }
}
