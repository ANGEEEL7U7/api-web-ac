import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().catch(() => console.log('Error en la api'));
