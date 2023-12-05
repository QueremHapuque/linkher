import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class JobVacancie extends Model {
  declare id: number;
  declare user_id: number;
  declare name: string;
  declare oportunity_type: 'Vaga de emprego' | 'Edital de Pesquisa';
  declare company: string;
  declare link: string;
  declare description: string;
  declare requeriments: string;
  declare local: string;
  declare expire_date: Date;
  declare is_affirmative: boolean;
  declare contract_type: 'CLT' | 'ESTÁGIO' | 'PJ';
  declare seniority: 'JUNIOR' | 'PLENO' | 'SENIOR';
  declare modality: 'PRESENCIAL' | 'REMOTO' | 'HÍBRIDO';
  declare working_hours: '20' | '30' | '40';
  declare is_secure: boolean;
}

JobVacancie.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
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
    oportunity_type: {
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
    expire_date: {
      type: sequelize.DATEONLY,
      allowNull: false,
    },
    is_affirmative: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    contract_type: {
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
    working_hours: {
      type: sequelize.ENUM('20', '30', '40'),
      allowNull: false,
    },
    is_secure: {
      type: sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'job_vacancies',
    timestamps: false,
  },
);

JobVacancie.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

export default JobVacancie;
