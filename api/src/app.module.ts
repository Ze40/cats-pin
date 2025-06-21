import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
