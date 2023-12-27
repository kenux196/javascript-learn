import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(
    session({
      secret: 'very-important-secret', // 세션 암호화에 사용되는 키
      resave: false, // 세션을 항상 저장할지 여부
      saveUninitialized: false, // 세션이 저장되기 전에 빈 값을 저장할지 여부
      cookie: { maxAge: 3600000 }, // 쿠키 요효 시간 1시간
    }),
  );
  app.use(passport.initialize()); // passport 초기화
  app.use(passport.session()); // 세션 저장소 초기화
  await app.listen(3000);
}
bootstrap();
