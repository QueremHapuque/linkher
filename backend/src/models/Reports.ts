import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class Reports extends Model {
  declare id: number;
  declare userId: number;
  declare reportTitle: string;
  declare reportDescription: string;
  declare reportAttachment: Blob;
  declare reportDate: Date;
  declare reportedLink: string;
}

Reports.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    reportTitle: {
      type: sequelize.STRING(100),
      allowNull: false,
    },
    reportDescription: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    reportAttachment: {
      type: sequelize.BLOB,
      allowNull: true,
    },
    reportDate: {
      type: sequelize.DATEONLY,
      allowNull: false,
    },
    reportedLink: {
      type: sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
  },
);

Reports.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default Reports;
