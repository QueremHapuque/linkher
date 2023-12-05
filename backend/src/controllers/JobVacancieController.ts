import { Request, Response } from 'express';
import errorHandler from '../exceptions/errorHandler';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import { NotFoundError } from '../exceptions/types';
import JobVacancie from '../models/JobVacancie';
import { ReqJobVacanciesDto } from '../models/dto/JobVacancies.dto';
import JobVacancieService from '../services/JobVacancieService';

class JobVacancieController {
  async create(req: Request, res: Response): Promise<Response<JobVacancie>> {
    try {
      const jobVacancies = await JobVacancie.create(req.body);
      return res.status(200).send(jobVacancies);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
  async get(req: Request, res: Response): Promise<Response<JobVacancie>> {
    try {
      const userId = req.params.id;
      const jobVacancie = await JobVacancieService.getByUserId(userId);

      return res.status(200).send(jobVacancie);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async Update(
    req: ReqJobVacanciesDto,
    res: Response,
  ): Promise<Response<JobVacancie>> {
    try {
      const userId = req.params.id;
      const jobVacancie = await JobVacancieService.getByUserId(userId);

      if (!jobVacancie)
        throw new NotFoundError(UserErrorMessages.USER_NOT_FOUND);

      const newJobVacancie = await JobVacancieService.update(userId, req.body);

      return res.status(200).send(newJobVacancie);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export default new JobVacancieController();
