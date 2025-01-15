import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Enable CORS
  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);

  // Enable global validation for DTOs
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
