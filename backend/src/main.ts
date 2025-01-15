import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

//Vercel configuration
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
const server = express();

async function bootstrap() {

  //In this case, you’re using the ExpressAdapter to make NestJS work with Express, which is compatible with Vercel’s serverless functions.
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();

    // Enable CORS
  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);

  // Enable global validation for DTOs
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
