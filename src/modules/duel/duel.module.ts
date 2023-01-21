import { Module } from '@nestjs/common';
import { DuelService } from './duel.service';
import { DuelGateway } from './duel.gateway';

@Module({
  providers: [DuelGateway, DuelService]
})
export class DuelModule {}
