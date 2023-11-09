import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    try {
      await User.create(req.body);
      const { email, is_admin } = req.body;
      const msg = {
        email: email,
        is_admin: is_admin,
      };
      res.json(msg);
    } catch (e: any) {
      console.log(e);
      res.status(400).json({ erros: e.errors.map((err: any) => err.message) });
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ error: 'id is required' });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ error: 'user not found' });
      }

      const newData = await user.update(req.body);
      return res.json(newData);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new UserController();
