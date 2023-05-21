import { NestFactory } from '@nestjs/core';
import { AppTaskModule } from './app-task.module';

async function bootstrap() {
  const app = await NestFactory.create(AppTaskModule);
  await app.listen(3000);
}
bootstrap();
