import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class Resume extends Model {
  declare id: number;
  declare userId: number;
  declare name: string;
  declare email: string;
  declare state: string;
  declare education: Record<string, string>;
  declare experience: Record<string, string>;
  declare languages: Record<string, string>;
  declare technologies: Record<string, string>;
  declare certifications: Record<string, string>;
  declare softSkills: string;
  declare contractType: 'CLT' | 'ESTÁGIO' | 'PJ';
  declare seniority: 'JUNIOR' | 'PLENO' | 'SENIOR';
  declare modality: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  declare workingHours: '20' | '30' | '40';
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
      allowNull: false,
    },
    email: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    state: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    education: {
      type: sequelize.JSON,
      allowNull: false,
    },
    experience: {
      type: sequelize.JSON,
      allowNull: false,
    },
    languages: {
      type: sequelize.JSON,
      allowNull: false,
    },
    technologies: {
      type: sequelize.JSON,
      allowNull: false,
    },
    certifications: {
      type: sequelize.JSON,
      allowNull: false,
    },
    softSkills: {
      type: sequelize.TEXT,
      defaultValue: [],
      allowNull: false,
    },
    contractType: {
      type: sequelize.ENUM('CLT', 'ESTÁGIO', 'PJ'),
      allowNull: false,
    },
    seniority: {
      type: sequelize.ENUM('JUNIOR', 'PLENO', 'SENIOR'),
      allowNull: false,
    },
    modality: {
      type: sequelize.ENUM('PRESENCIAL', 'REMOTO', 'HÍBRIDO'),
      allowNull: false,
    },
    workingHours: {
      type: sequelize.ENUM('20', '30', '40'),
      allowNull: false,
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
