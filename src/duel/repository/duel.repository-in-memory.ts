import { Injectable } from '@nestjs/common';
import { Duel } from 'duel/entities/duel.entity';
import { Player } from 'duel/entities/player.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DuelRepositoryInMemory {
  duels: Duel[];

  create({ roomCode }: { roomCode: string }) {
    const newDuel = new Duel();

    Object.assign(newDuel, {
      id: uuid(),
      players: [],
      roomCode,
    } as Duel);

    return newDuel;
  }

  delete(duelId: string) {
    this.duels = this.duels.filter((duel) => duel.id !== duelId);
  }

  findById(duelId: string) {
    return this.duels.find((duel) => duel.id === duelId);
  }

  findByRoomCode(roomCode: string) {
    return this.duels.filter((duel) => duel.roomCode === roomCode);
  }

  update(duelId: string, { players }: { players: Player[] }) {
    const index = this.duels.findIndex((r) => r.id === duelId);

    this.duels[index] = {
      ...this.duels[index],
      players: players,
    };

    return this.duels[index];
  }
}
