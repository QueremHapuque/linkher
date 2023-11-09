import { Request, Response } from 'express';
import errorHandler from '../exceptions/errorHandler';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import { NotFoundError } from '../exceptions/types';
import User from '../models/User';
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

  test(req: Request, res: Response) {
    return res.status(200).send({ message: 'estou autenticado' });
  }

  async login(req: Request, res: Response): Promise<Response | undefined> {
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

      const token = UserService.createAccessToken(user);

      return res.status(200).send({ token: token });
    } catch (error) {
      errorHandler(error, res);
    }
  }
}

export default new UserController();
