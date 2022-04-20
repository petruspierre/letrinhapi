import { PracticeModule } from '@modules/practice/practice.module';
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, PracticeModule],
})
export class HttpModule {}
