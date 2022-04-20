import { Module } from '@nestjs/common';

import { PracticeService } from './practice.service';
import { PracticeController } from './practice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PracticeWord,
  PracticeWordSchema,
} from './schemas/practice-word.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PracticeWord.name,
        schema: PracticeWordSchema,
      },
    ]),
  ],
  controllers: [PracticeController],
  providers: [PracticeService],
})
export class PracticeModule {}
