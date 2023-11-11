import { Request, Response } from 'express';
import errorHandler from '../exceptions/errorHandler';
import Resume from '../models/Resume';

class ResumeController {
  async create(req: Request, res: Response) {
    try {
      // const resumeData: ResumeDto = {
      //   id: req.body.id,
      //   userId: req.body.userId,
      //   name: req.body.name,
      //   email: req.body.email,
      //   state: req.body.state,
      //   education: req.body.education,
      //   experience: req.body.experience,
      //   languages: req.body.languages,
      //   technologies: req.body.technologies,
      //   certifications: req.body.certifications,
      //   softSkills: req.body.softSkills,
      //   contractType: req.body.contractType,
      //   seniority: req.body.seniority,
      //   modality: req.body.modality,
      //   workingHours: req.body.workingHours,
      // };
      const resume = await Resume.create(req.body);

      res.status(200).send(resume);
    } catch (error) {
      errorHandler(error, res);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const resume = await Resume.findOne({ where: { userId: userId } });

      res.status(200).send(resume);
    } catch (error) {
      errorHandler(error, res);
    }
  }
}

export default new ResumeController();
