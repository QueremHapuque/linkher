import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

async function userAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers['authorization'];
    const secret = process.env.SECRET;

    if (!token) return res.status(401).json({ message: 'Token is required' });

    try {
      jwt.verify(token, secret!);
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Token is required' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Token is required' });
  }
}

export default userAuth;
