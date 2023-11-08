import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import 'dotenv/config';

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

    const token = jwt.sign(user, secret!);
    return token;
  }
}

export default new UserService();
