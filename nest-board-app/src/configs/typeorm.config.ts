import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'boarddb',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
