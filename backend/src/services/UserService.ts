import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class UserService {
  /**
   * @description verify if the user password is correct
   * @param password
   * @param hash
   * @returns boolean
   */
  async passwordCheck(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  /**
   * @description create a user access token
   * @param payload
   * @returns the user token
   */
  createAccessToken(payload: User): string {
    const secret = process.env.AUTH_SECRET_KEY;
    const user = {
      id: payload.getDataValue('id') as string,
      email: payload.getDataValue('email') as string,
      isAdmin: payload.getDataValue('is_admin') as string,
    };

    const token = jwt.sign(user, secret!, {
      expiresIn: process.env.SESSION_EXPIRE_TIME!,
    });
    return token;
  }

  /**
   *
   * @param userId
   * @returns
   */
  async getUserById(userId: string): Promise<User | null> {
    return await User.findByPk(userId);
  }

  /**
   *
   * @param email
   * @returns
   */
  async getByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email: email } });
  }
}

export default new UserService();
