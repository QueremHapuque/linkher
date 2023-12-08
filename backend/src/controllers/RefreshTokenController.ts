import { Request, Response } from 'express';
import UserService from '../services/UserService';

class RefreshTokenController {
  async verifyToken(req: Request, res: Response): Promise<Response<object>> {
    const { refreshToken } = req.body;
    const token = UserService.refreshToken(refreshToken);
    return res.status(200).json({ token });
  }
}

export default new RefreshTokenController();
