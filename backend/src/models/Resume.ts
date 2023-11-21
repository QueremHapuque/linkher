import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class Resume extends Model {
  declare id: number;
  declare userId: number;
  declare name?: string;
  declare email?: string;
  declare state?: string;
  declare city?: string;
  declare education?: Record<string, string>;
  declare experience?: Record<string, string>;
  declare languages?: Record<string, string>;
  declare technologies?: Record<string, string>;
  declare certifications?: Record<string, string>;
  declare softSkills?: string;
  declare isClt?: boolean;
  declare isInternship?: boolean;
  declare isPj?: boolean;
  declare isSearch?: boolean;
  declare isInPerson?: boolean;
  declare isRemote?: boolean;
  declare isHybrid?: boolean;
  declare isHalfTime?: boolean;
  declare isThreeQuarters?: boolean;
  declare isFullTime?: boolean;
}

Resume.init(
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
    name: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    email: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    state: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    city: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    education: {
      type: sequelize.JSON,
      allowNull: true,
    },
    experience: {
      type: sequelize.JSON,
      allowNull: true,
    },
    languages: {
      type: sequelize.JSON,
      allowNull: true,
    },
    technologies: {
      type: sequelize.JSON,
      allowNull: true,
    },
    certifications: {
      type: sequelize.JSON,
      allowNull: true,
    },
    softSkills: {
      type: sequelize.TEXT,
      defaultValue: [],
      allowNull: true,
    },
    isClt: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isInternship: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isPj: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isSearch: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isJunior: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isPleno: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isSenior: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isInPerson: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isRemote: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isHybrid: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isHalfTime: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isThreeQuarters: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    isFullTime: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: 'resume',
    underscored: true,
  },
);

Resume.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default Resume;
