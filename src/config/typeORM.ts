import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Bootcamp012024',//cambiar dependiendo la pass de tu sql
    database: 'final',//cambiar dependiendo el nombre de tu tabla en tu sql
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
    // logging: true,


    //? Docker
    // type: 'postgres',
    // host: '0.0.0.0',
    // port: 5435,
    // username: 'postgres',
    // password: 'root',
    // database: 'bootcamp2024',
    // entities: ['dist/**/*.entity.{ts,js}'],
    // synchronize: true,
    // // logging: true,
  };
};
