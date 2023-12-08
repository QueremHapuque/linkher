import request from 'supertest';
import JobVacancie from '../../models/JobVacancie';
import User from '../../models/User';
import { server } from '../../server';

const userInfo = {
  email: 'test.user@gmail.com',
  password: '123456',
  is_admin: false,
  id: 0,
  accessToken: '',
};

const jobVacancie = {
  user_id: userInfo.id,
  name: 'teste job',
  is_job: true,
  company: 'Empresa teste',
  link: 'https://google.com',
  description: 'descrição da vaga',
  requeriments: 'requisitos',
  local: 'PE',
  expire_date: '01/02/2003',
  is_affirmative: true,
  is_clt: true,
  is_junior: true,
  is_hybrid: true,
  is_fullTime: true,
  is_secure: true,
};

describe('Job Vacancie Controller Tests', () => {
  it('should create an users job vacancie and return 200', async () => {
    const authValue = `Bearer ${userInfo.accessToken}`;
    const response = await request(server)
      .post(`/users/jobVacancie/create/`)
      .set('authorization', authValue)
      .send(jobVacancie);

    expect(response.body.company).toEqual('Empresa teste');
    expect(response.statusCode).toBe(200);
  });

  it('Should get the user job vacancie and return 200', async () => {
    const authValue = `Bearer ${userInfo.accessToken}`;
    const response = await request(server)
      .get(`/users/jobVacancie/${userInfo.id}`)
      .set('authorization', authValue);

    expect(response.body.is_hybrid).toEqual(true);
    expect(response.statusCode).toBe(200);
  });

  it('Should update the user job vacancie and return 200', async () => {
    const authValue = `Bearer ${userInfo.accessToken}`;
    const response = await request(server)
      .put(`/user/jobVacancie/update/${userInfo.id}`)
      .set('authorization', authValue)
      .send({ name: 'Nome para teste' });

    expect(response.body.name).toBe('Nome para teste');
    expect(response.statusCode).toBe(200);
  });
});

beforeAll(async () => {
  await request(server).post('/users/create/').send(userInfo);
  const login = await request(server).post('/users/login/').send({
    email: userInfo.email,
    password: userInfo.password,
  });

  userInfo.id = login.body.userId;
  userInfo.accessToken = login.body.accessToken;
  jobVacancie.user_id = login.body.userId;
});

afterAll(async () => {
  JobVacancie.destroy({ where: { user_id: userInfo.id } });
  User.destroy({ where: { id: userInfo.id } });
});
