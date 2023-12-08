import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserErrorMessages } from '../exceptions/messages/UserMessages';

async function verifyRefreshToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { refreshToken } = req.body;
    const secret = process.env.AUTH_REFRESH_SECRET_KEY;

    if (!refreshToken)
      return res.status(401).json({ message: UserErrorMessages.USER_AUTH });

    try {
      jwt.verify(refreshToken, secret!);
      next();
    } catch (error) {
      return res.status(401).json({ message: UserErrorMessages.USER_AUTH });
    }
  } catch (error) {
    return res.status(400).json({ message: UserErrorMessages.USER_AUTH });
  }
}

export default verifyRefreshToken;
