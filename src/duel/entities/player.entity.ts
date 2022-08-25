import { Game } from './game.entity';

export class Player {
  id: string;

  name: string;
  game?: Game;

  duelId: string;
}
