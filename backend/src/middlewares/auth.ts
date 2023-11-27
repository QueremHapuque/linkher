import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';
import 'dotenv/config';

async function userAuth(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.headers);
    const token = req.headers['authorization']?.split(' ')[1];
    const secret = process.env.AUTH_SECRET_KEY;

    if (!token)
      return res.status(401).json({ message: UserErrorMessages.USER_AUTH });

    try {
      jwt.verify(token, secret!);
      next();
    } catch (error) {
      return res.status(401).json({ message: UserErrorMessages.USER_AUTH });
    }
  } catch (error) {
    return res.status(400).json({ message: UserErrorMessages.USER_AUTH });
  }
}

export default userAuth;
