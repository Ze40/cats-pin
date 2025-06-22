import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [DbModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
