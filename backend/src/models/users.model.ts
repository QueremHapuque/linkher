import { DataTypes } from 'sequelize';
import { db } from '../database/db';
import { jobVacanciesModel } from './jobVacancies.model';
import { reportsModel } from './reports.model';
import { researchCallsModel } from './researchCalls.model';
import { resumeModel } from './resume.model';

export const usersModel = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

usersModel.hasMany(reportsModel);
reportsModel.belongsTo(usersModel);

usersModel.hasMany(jobVacanciesModel);
jobVacanciesModel.belongsTo(usersModel);

usersModel.hasMany(researchCallsModel);
researchCallsModel.belongsTo(usersModel);

usersModel.hasOne(resumeModel);
resumeModel.belongsTo(usersModel);
