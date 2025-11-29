import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function application(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
}
application().catch(() => console.log('Error en la api'));
