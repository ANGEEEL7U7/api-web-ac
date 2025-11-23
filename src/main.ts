import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import dotenv from 'dotenv';

async function bootstrap() {
  const env = dotenv.config({ path: './.env' });
  if (env.error !== undefined)
    throw new Error(`Error en el env ${env.error.message}`);

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch(() => console.log('Error en la api'));
