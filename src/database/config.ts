import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const sqlite: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: `${process.cwd()}/db.sqlite`,
  entities: [`${__dirname}/entities/**/*{.ts,.js}`],
};
