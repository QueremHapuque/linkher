import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = await User.create({
        email: 'diogo@teste.com',
        password: 'password',
        is_admin: false,
      });
      res.json(newUser);
    } catch (error) {
      res.status(400).json('erro');
    }
  }
}

export default new UserController();
