import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({
      origin: 'https://production-domain.com',
    });
  }
  await app.listen(3333);
}
bootstrap();
