interface Letter {
  letter: string;
  exists: boolean;
  correctPlace: boolean;
}

interface KeyboardLetter extends Letter {
  used: boolean;
}

export type Guess = Array<Letter>;

export class Game {
  id: string;
  duelId: string;

  attempts: number;
  isGameOver: boolean;
  guesses: Guess[];
  wordLength: number;
  keyboardState: Record<string, KeyboardLetter>;
  word: string;
  win?: boolean;

  createdAt: Date;
}
