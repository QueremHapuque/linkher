import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (e: any) {
      console.log(e);
      res.status(400).json({ erros: e.errors.map((err: any) => err.message) });
    }
  }
}

export default new UserController();
