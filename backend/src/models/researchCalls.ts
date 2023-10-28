import { DataTypes } from 'sequelize';
import { db } from '../database/db';

export const researchCallsModel = db.define('research_calls', {
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
  oportunity_type: {
    type: DataTypes.ENUM('Vaga de emprego', 'Edital de Pesquisa'),
    allowNull: false,
  },
  organization_name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  about_organization: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requeriments: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  },
  local: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  expire_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  is_affirmative: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  modality: {
    type: DataTypes.ENUM('PRESENCIAL', 'REMOTO', 'HÍBRIDO'),
    allowNull: false,
  },
  is_secure: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});
