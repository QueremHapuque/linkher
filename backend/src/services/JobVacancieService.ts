import JobVacancie from '../models/JobVacancie';
import { IJobVacancie } from '../models/dto/JobVacancies.dto';

class JobVacancieService {
  async getByUserId(userId: string): Promise<JobVacancie | null> {
    return JobVacancie.findOne({ where: { user_id: userId } });
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
