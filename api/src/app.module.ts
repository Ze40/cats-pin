import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './cats/cats.module';
import { DbModule } from './db/db.module';
import { Like } from './db/entity/like.entity';
import { User } from './db/entity/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'cat-pinterest-api-pg',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [User, Like],
      synchronize: true,
    }),
    UserModule,
    DbModule,
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
