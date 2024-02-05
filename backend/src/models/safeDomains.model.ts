import { DataTypes } from 'sequelize';
import { db } from '../database/db';

export const safeDomains = db.define('safe_domains', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  domain: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
});

safeDomains.sync();
