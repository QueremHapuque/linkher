import { Request, Response } from 'express';
import errorHandler from '../exceptions/errorHandler';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import { NotFoundError } from '../exceptions/types';
import Resume from '../models/Resume';
import ResumeService from '../services/ResumeService';
import { ReqResumeDto } from '../models/dto/Resume.dto';

class ResumeController {
  async create(req: Request, res: Response): Promise<Response<Resume>> {
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

      return res.status(200).send(resume);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async get(req: Request, res: Response): Promise<Response<Resume>> {
    try {
      const userId = req.params.id;
      const resume = await ResumeService.getByUserId(userId);

      return res.status(200).send(resume);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async Update(req: ReqResumeDto, res: Response): Promise<Response<Resume>> {
    try {
      const userId = req.params.id;
      const resume = await ResumeService.getByUserId(userId);

      if (!resume) throw new NotFoundError(UserErrorMessages.USER_NOT_FOUND);

      const newResume = await ResumeService.update(userId, req.body);

      return res.status(200).send(newResume);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export default new ResumeController();
