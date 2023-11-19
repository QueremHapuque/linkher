import Resume from '../models/Resume';
import { IResume } from '../models/dto/Resume.dto';

class ResumeService {
  async getByUserId(userId: string): Promise<Resume | null> {
    return Resume.findOne({ where: { userId: userId } });
  }

  async update(userId: string, resume: IResume): Promise<Resume | null> {
    await Resume.update(resume, {
      where: { userId: userId },
    });

    return this.getByUserId(userId);
  }
}

export default new ResumeService();
