import { Request, Response } from 'express';
import User from '../models/User';
import errorHandler from '../exceptions/errorHandler';
import { NotFoundError } from '../exceptions/types';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import UserService from '../services/UserService';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      errorHandler(error, res);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) throw new NotFoundError(UserErrorMessages.USER_NOT_FOUND);

      const isMatch = await UserService.passwordCheck(
        password,
        user!.getDataValue('password_hash'),
      );

      if (!isMatch) throw new Error(UserErrorMessages.USER_PASSWORD);
    } catch (error) {
      errorHandler(error, res);
    }
  }
}

export default new UserController();
