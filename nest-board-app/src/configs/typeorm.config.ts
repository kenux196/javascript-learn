import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'kenux.duckdns.org',
  port: 3306,
  username: 'toyman',
  password: 'rotkfrn',
  database: 'toysDB',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
