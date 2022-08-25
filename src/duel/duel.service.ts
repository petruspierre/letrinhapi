import { Injectable } from '@nestjs/common';
import { CreateDuelDto } from './dto/create-duel.dto';
import { UpdateDuelDto } from './dto/update-duel.dto';
import { DuelRepositoryInMemory } from './repository/duel.repository-in-memory';

@Injectable()
export class DuelService {
  constructor(private duelRepository: DuelRepositoryInMemory) {}

  create() {
    const roomCode = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);

    return this.duelRepository.create({
      roomCode,
    });
  }

  findAll() {
    return `This action returns all duel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} duel`;
  }

  update(id: number, updateDuelDto: UpdateDuelDto) {
    return `This action updates a #${id} duel`;
  }

  remove(id: number) {
    return `This action removes a #${id} duel`;
  }
}
