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
      host: process.env.DB_HOST || 'cat-pinterest-api-pg',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1',
      database: process.env.DB_NAME || 'support_lk_db',
      entities: [],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
