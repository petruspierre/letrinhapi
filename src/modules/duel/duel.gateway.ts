import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { DuelService } from './duel.service';
import { CreateDuelDto } from './dto/create-duel.dto';
import { UpdateDuelDto } from './dto/update-duel.dto';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { events } from './events';

@WebSocketGateway(3004, { namespace: 'duel', cors: { origin: '*' } })
export class DuelGateway {
  private readonly logger = new Logger(DuelGateway.name);

  @WebSocketServer()
  server: Server;

  constructor(private readonly duelService: DuelService) {}

  @SubscribeMessage(events.CREATE_DUEL)
  create(@ConnectedSocket() client: Socket) {
    const duel = this.duelService.create();

    client.join(duel.roomCode);

    this.server.to(duel.roomCode).emit(events.DUEL_CREATED, duel);
  }
}
