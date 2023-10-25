import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const db = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
  dialect: 'postgres',
  host: DB_HOST!,
  port: parseInt(DB_PORT!),
});
