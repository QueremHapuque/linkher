import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';

class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare is_admin: boolean;
}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: sequelize.STRING(100),
      allowNull: false,
    },
    is_admin: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
  },
);

export default User;
