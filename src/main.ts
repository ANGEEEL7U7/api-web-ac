// api/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { INestApplication } from '@nestjs/common';
import { VercelRequest, VercelResponse } from '@vercel/node';

let cachedApp: INestApplication;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
    });
    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const app = await bootstrap();
  // Use the underlying platform's handler
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp(req, res);
}
