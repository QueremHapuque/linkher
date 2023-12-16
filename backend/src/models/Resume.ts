import sequelize, { Model } from 'sequelize';
import { db } from '../database/db';
import User from './User';
import {
  CertificationsItem,
  EducationItem,
  ExperiencieItem,
  LanguagesItem,
  SoftSkillItem,
  TechnologiesItem,
} from './dto/Resume.dto';

class Resume extends Model {
  declare id: number;
  declare userId: number;
  declare name?: string;
  declare email?: string;
  declare state?: string;
  declare city?: string;
  declare education?: EducationItem[];
  declare experience?: ExperiencieItem[];
  declare languages?: LanguagesItem[];
  declare technologies?: TechnologiesItem[];
  declare certifications?: CertificationsItem[];
  declare softSkills?: SoftSkillItem[];
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
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('education');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('education', value ? JSON.stringify(value) : null);
      },
    },
    experience: {
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('experience');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('experience', value ? JSON.stringify(value) : null);
      },
    },
    languages: {
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('languages');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('languages', value ? JSON.stringify(value) : null);
      },
    },
    technologies: {
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('technologies');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('technologies', value ? JSON.stringify(value) : null);
      },
    },
    certifications: {
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('certifications');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue(
          'certifications',
          value ? JSON.stringify(value) : null,
        );
      },
    },
    softSkills: {
      type: sequelize.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue('softSkills');
        return rawValue ? JSON.parse(rawValue) : null;
      },
      set(value) {
        this.setDataValue('softSkills', value ? JSON.stringify(value) : null);
      },
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
