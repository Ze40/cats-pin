import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbModule } from './db/db.module';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    DbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
