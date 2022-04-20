import { Module } from '@nestjs/common';

import { DatabaseModule } from '@shared/infra/database/database.module';
import { HttpModule } from '@shared/infra/http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
