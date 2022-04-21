import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@shared/infra/database/database.module';
import { HttpModule } from '@shared/infra/http/http.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
