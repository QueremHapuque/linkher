import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';

class SafeDomains extends Model {
  declare id: number;
  declare domain: string;
}

SafeDomains.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    domain: {
      type: sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    tableName: 'safe_domains',
  },
);

export default SafeDomains;
