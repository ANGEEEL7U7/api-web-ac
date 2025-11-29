import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Server } from 'http';
let server: Server;
export async function bootstrap() {
  if (server) return server;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();
  server = app.getHttpServer();
}
bootstrap().catch(() => console.log('Error en la api'));
