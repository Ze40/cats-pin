import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/db/entity/user.entity';

import { DbService } from './db.service';
import { Like } from './entity/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Like])],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
