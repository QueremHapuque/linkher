import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class JobVacancies extends Model {
  declare id: number;
  declare userId: number;
  declare name: string;
  declare oportunityType: 'Vaga de emprego' | 'Edital de Pesquisa';
  declare company: string;
  declare link: string;
  declare description: string;
  declare requeriments: string;
  declare local: string;
  declare expireDate: Date;
  declare isAffirmative: boolean;
  declare contractType: 'CLT' | 'ESTÁGIO' | 'PJ';
  declare seniority: 'JUNIOR' | 'PLENO' | 'SENIOR';
  declare modality: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  declare workingHours: '20' | '30' | '40';
  declare isSecure: boolean;
}

JobVacancies.init(
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
    company: {
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
    isSecure: {
      type: sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
  },
);

JobVacancies.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default JobVacancies;
