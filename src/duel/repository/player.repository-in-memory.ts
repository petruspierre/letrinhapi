import { Injectable } from '@nestjs/common';
import { Player } from 'duel/entities/player.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayerRepositoryInMemory {
  players: Player[];

  create({ name, duelId }: { name: string; duelId: string }) {
    const newPlayer = new Player();

    Object.assign(newPlayer, {
      id: uuid(),
      name,
      duelId,
    } as Player);
  }

  delete(playerId: string) {
    this.players = this.players.filter((player) => player.id !== playerId);
  }

  findById(playerId: string) {
    return this.players.find((player) => player.id === playerId);
  }

  findByDuelId(duelId: string) {
    return this.players.filter((player) => player.duelId === duelId);
  }

  update(playerId: string, { name }: { name: string }) {
    const index = this.players.findIndex((r) => r.id === playerId);

    this.players[index] = {
      ...this.players[index],
      name,
    };

    return this.players[index];
  }
}
