import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://letrinha:letrinha@localhost:27017/?authMechanism=DEFAULT',
    ),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
