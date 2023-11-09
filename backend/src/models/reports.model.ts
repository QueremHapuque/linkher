import { DataTypes } from 'sequelize';
import { db } from '../database/db';

export const reportsModel = db.define('reports', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  report_title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  report_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  report_attachment: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  report_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  reported_link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

reportsModel.sync();
