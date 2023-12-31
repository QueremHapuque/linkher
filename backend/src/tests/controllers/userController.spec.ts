import {} from 'jest';
import request from 'supertest';
import User from '../../models/User';
import { server } from '../../server';
import { UserMessages } from '../../exceptions/messages/UserMessages';

const userInfo = {
  email: 'test.user@gmail.com',
  password: '123456',
  is_admin: false,
  id: 0,
  accessToken: '',
};

describe('User Controller Tests', () => {
  it('should create an user and return 200', async () => {
    const response = await request(server)
      .post('/users/create/')
      .send(userInfo);

    expect(response.statusCode).toBe(200);
  });

  it('Should login the user and return 200', async () => {
    const response = await request(server).post('/users/login/').send({
      email: 'test.user@gmail.com',
      password: '123456',
    });

    userInfo.id = response.body.userId;
    userInfo.accessToken = response.body.accessToken;

    expect(typeof response.body.accessToken).toEqual('string');
    expect(response.statusCode).toBe(200);
  });

  it('Should update the user information and return 200', async () => {
    const response = await request(server)
      .put(`/user/update/${userInfo.id}`)
      .send({ email: 'test2.user@gmail.com' });

    expect(response.body.email).toBe('test2.user@gmail.com');
    expect(response.statusCode).toBe(200);
  });

  it('Should return the user email and return 200', async () => {
    const authValue = `Bearer ${userInfo.accessToken}`;

    const response = await request(server)
      .get(`/user/email/${userInfo.id}`)
      .set('authorization', authValue);

    expect(response.body.email).toBe('test2.user@gmail.com');
    expect(response.statusCode).toBe(200);
  });

  it('Should change the user password and return 200', async () => {
    const authValue = `Bearer ${userInfo.accessToken}`;

    const response = await request(server)
      .put(`/user/update/password/${userInfo.id}`)
      .send({ currentPassword: userInfo.password, newPassword: '1234567' })
      .set('authorization', authValue);

    expect(response.body.message).toBe(UserMessages.USER_CHANGE_PASSWORD);
    expect(response.statusCode).toBe(200);
  });
});

afterAll(async () => {
  User.destroy({ where: { id: userInfo.id } });
});
