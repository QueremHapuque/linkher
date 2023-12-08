import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IToken } from '../models/dto/Token.dto';

class UserService {
  // async createUser(email: string, password: string): Promise<User | null> {
  //   return User.create()
  // }
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
  createAccessToken(payload: User): IToken {
    const secret = process.env.AUTH_SECRET_KEY;
    const secretRefresh = process.env.AUTH_REFRESH_SECRET_KEY;
    const user = {
      id: payload.getDataValue('id') as string,
      email: payload.getDataValue('email') as string,
      isAdmin: payload.getDataValue('is_admin') as string,
    };

    const refreshToken = jwt.sign(user, secretRefresh!, {
      expiresIn: process.env.SESSION_EXPIRE_SECRET_TIME!,
    });

    const accessToken = jwt.sign({ refresh_token: refreshToken }, secret!, {
      expiresIn: process.env.SESSION_EXPIRE_TIME!,
    });

    return { accessToken, refreshToken };
  }

  refreshToken(refreshToken: string): string {
    const secret = process.env.AUTH_SECRET_KEY;
    const token = jwt.sign({ refreshToken }, secret!, {
      expiresIn: process.env.SESSION_EXPIRE_SECRET_TIME!,
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

  async getUserEmail(userId: string): Promise<string | null> {
    return await User.findOne({ where: { id: userId } }).then(
      (x) => x?.getDataValue('email'),
    );
  }
}

export default new UserService();
