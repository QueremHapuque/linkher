import { Op } from 'sequelize';
import JobVacancie from '../models/JobVacancie';
import Resume from '../models/Resume';
import { IJobVacancie } from '../models/dto/JobVacancies.dto';

class JobVacancieService {
  async getByUserId(userId: string): Promise<JobVacancie | null> {
    return JobVacancie.findOne({ where: { user_id: userId } });
  }

  async getByUserFilter(userId: string): Promise<JobVacancie[] | null> {
    const resume = await Resume.findOne({ where: { user_id: userId } });
    if (resume == null) {
      return null;
    }
    const teste = resume.dataValues;
    const curriculumFields = [
      'isClt',
      'isInternship',
      'isPj',
      'isJunior',
      'isPleno',
      'isSenior',
      'isInPerson',
      'isRemote',
      'isHybrid',
      'isHalfTime',
      'isThreeQuarters',
      'isFullTime',
    ];

    const userFilters = curriculumFields.filter((field) => teste[field]);

    const fieldMapping = {
      isThreeQuarters: 'is_threeQuarters',
      isFullTime: 'is_fullTime',
      isHalfTime: 'is_halfTime',
      isInPerson: 'is_inPerson',
      isInternship: 'is_internship',
      isClt: 'is_clt',
      isPj: 'is_pj',
      isJunior: 'is_Junior',
      isPleno: 'is_pleno',
      isSenior: 'is_senior',
      isRemote: 'is_remote',
      isHybrid: 'is_hybrid',
    };

    const convertToSnakeCase = (str: string) =>
      fieldMapping[str as keyof typeof fieldMapping] || str;
    const userFiltersSnakeCase = userFilters.map(convertToSnakeCase);

    const whereClause = {
      [Op.or]: userFiltersSnakeCase.map((field) => ({ [field]: true })),
    };

    return JobVacancie.findAll({
      where: whereClause,
    });
  }

  async update(
    userId: string,
    jobVacancie: IJobVacancie,
  ): Promise<JobVacancie | null> {
    await JobVacancie.update(jobVacancie, {
      where: { user_id: userId },
    });

    return this.getByUserId(userId);
  }
}

export default new JobVacancieService();
