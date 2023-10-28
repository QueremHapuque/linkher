import { DataTypes } from 'sequelize';
import { db } from '../database/db';

export const resumeModel = db.define('resume', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  education: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  experience: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  languages: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  certifications: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  soft_skills: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: false,
    allowNull: false,
  },
  contract_type: {
    type: DataTypes.ENUM('CLT', 'ESTÁGIO', 'PJ'),
    allowNull: false,
  },
  seniority: {
    type: DataTypes.ENUM('JUNIOR', 'PLENO', 'SENIOR'),
    allowNull: false,
  },
  modality: {
    type: DataTypes.ENUM('PRESENCIAL', 'REMOTO', 'HÍBRIDO'),
    allowNull: false,
  },
  working_hours: {
    type: DataTypes.ENUM('20', '30', '40'),
    allowNull: false,
  },
});
