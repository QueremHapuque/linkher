import { Request, Response } from 'express';
import errorHandler from '../exceptions/errorHandler';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import { NotFoundError } from '../exceptions/types';
import User from '../models/User';
import UserService from '../services/UserService';

class UserController {
  async create(req: Request, res: Response) {
    try {
      await User.create(req.body);
      const { email, is_admin } = req.body;
      const userInfo = {
        email: email,
        is_admin: is_admin ?? false,
      };
      res.status(200).send(userInfo);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async update(req: Request, res: Response): Promise<Response | undefined> {
    try {
      if (!req.params.id) throw new Error(UserErrorMessages.USER_ID_NULL);

      const user = await User.findByPk(req.params.id);

      if (!user) throw new NotFoundError(UserErrorMessages.USER_NOT_FOUND);

      const newUser = await user.update(req.body);

      return res.status(200).send(newUser);
    } catch (error) {
      return errorHandler(error, res);
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
      return errorHandler(error, res);
    }
  }
}

export default new UserController();
