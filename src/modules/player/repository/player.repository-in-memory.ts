import { Injectable } from '@nestjs/common';

import { Player } from '@core/entities/player';
import { PlayerRepositoryInterface } from '@core/repositories/player-repository.interface';

@Injectable()
export class PlayerRepositoryInMemory implements PlayerRepositoryInterface {
  players: Player[];

  async create(player: Player) {
    this.players.push(player);
  }

  async delete(playerId: string) {
    this.players = this.players.filter((player) => player.id !== playerId);
  }

  async update(id: string, item: Player): Promise<void> {
    const index = this.players.findIndex((player) => player.id === id);

    if (index === -1) {
      throw new Error('Player not found!');
    }

    this.players[index] = item;
  }

  async findOne(id: string) {
    return this.players.find((player) => player.id === id);
  }
}
