import { NestFactory } from '@nestjs/core';
import { HelloModule } from './hello.module';

async function bootstrap() {
  console.log('Create app by NestFactory');
  const app = await NestFactory.create(HelloModule);
  console.log('Created app');

  await app.listen(3000, () => {
    console.log('Start server...!');
  });
}

bootstrap();
