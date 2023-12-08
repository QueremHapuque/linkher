import bcrypt from 'bcrypt';
import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';

class User extends Model {
  declare id: number;
  declare email: string;
  declare password_hash: string;
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
      unique: {
        name: 'email',
        msg: 'Email precisa ser unico',
      },
      validate: {
        isEmail: {
          msg: 'Email invalido',
        },
      },
    },
    password_hash: {
      type: sequelize.STRING(100),
      defaultValue: '',
    },
    password: {
      type: sequelize.VIRTUAL,
      allowNull: false,
      validate: {
        len: {
          msg: 'Senha precisa ter pelo menos 6 caracteres',
          args: [6, 50],
        },
      },
    },
    is_admin: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users',
    hooks: {
      beforeSave: async (user: User) => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
  },
);

export default User;
