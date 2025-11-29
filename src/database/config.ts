import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const sqlite: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '../../db.sqlite',
  entities: [`${__dirname}/entities/**/*{.ts,.js}`],
};
