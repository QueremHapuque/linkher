import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class ResearchCalls extends Model {
  declare id: number;
  declare userId: number;
  declare name: string;
  declare oportunityType: 'Vaga de emprego' | 'Edital de Pesquisa';
  declare organizationName: string;
  declare aboutOrganization: string;
  declare link: string;
  declare description: string;
  declare requeriments: string;
  declare local: string;
  declare expireDate: Date;
  declare isAffirmative: boolean;
  declare modality: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  declare isSecurity: boolean;
}

ResearchCalls.init(
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
    oportunityType: {
      type: sequelize.ENUM('Vaga de emprego', 'Edital de Pesquisa'),
      allowNull: false,
    },
    organizationName: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    aboutOrganization: {
      type: sequelize.TEXT,
      allowNull: true,
    },
    link: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    requeriments: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    local: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    expireDate: {
      type: sequelize.DATEONLY,
      allowNull: false,
    },
    isAffirmative: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    modality: {
      type: sequelize.ENUM('PRESENCIAL', 'REMOTO', 'HÍBRIDO'),
      allowNull: false,
    },
    isSecure: {
      type: sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'research_calls',
  },
);

ResearchCalls.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default ResearchCalls;
