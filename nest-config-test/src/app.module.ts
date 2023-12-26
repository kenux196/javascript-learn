import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import config from '../configs/config';

console.log('env: ' + process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // global 설정. default로 가져가자.
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      load: [config],
      cache: true,
      expandVariables: true,
    }),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}