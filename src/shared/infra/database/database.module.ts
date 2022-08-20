import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DATABASE_URL)],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
