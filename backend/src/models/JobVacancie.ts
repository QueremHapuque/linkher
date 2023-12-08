import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';

class JobVacancie extends Model {
  declare id: number;
  declare user_id: number;
  declare name: string;
  declare is_job?: boolean;
  declare is_researchCall?: boolean;
  declare company: string;
  declare link: string;
  declare description: string;
  declare requeriments: string;
  declare local: string;
  declare expire_date: Date;
  declare is_affirmative: boolean;
  declare is_clt?: boolean;
  declare is_internship?: boolean;
  declare is_pj?: boolean;
  declare is_junior?: boolean;
  declare is_pleno?: boolean;
  declare is_senior?: boolean;
  declare is_inPerson?: boolean;
  declare is_remote?: boolean;
  declare is_hybrid?: boolean;
  declare is_halfTime?: boolean;
  declare is_threeQuarters?: boolean;
  declare is_fullTime?: boolean;
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
    is_job: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_researchCall: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
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
      type: sequelize.BOOLEAN(),
      defaultValue: false,
      allowNull: false,
    },
    is_clt: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_internship: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_pj: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_junior: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_pleno: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_senior: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_inPerson: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_remote: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_hybrid: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_halfTime: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_threeQuarters: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_fullTime: {
      type: sequelize.BOOLEAN(),
      allowNull: true,
    },
    is_secure: {
      type: sequelize.BOOLEAN(),
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
