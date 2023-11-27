import request from 'supertest';
import Resume from '../../models/Resume';
import User from '../../models/User';
import { server } from '../../server';

const userInfo = {
  email: 'test.user@gmail.com',
  password: '123456',
  is_admin: false,
  id: 0,
  token: '',
};

const resume = {
  userId: userInfo.id,
  name: 'test',
  email: 'test@gmail.com',
  state: 'pernambuco',
  education: { UFRPE: 'Sistemas de informação' },
  experience: { cesar: 'dev' },
  languages: { inglês: 'fluente' },
  technologies: { UFRPE: 'Sistemas de informação' },
  certifications: { UFRPE: 'Sistemas de informação' },
  softSkills: 'empatia, gestão de tempo, aprendizagem',
  contractType: 'CLT',
  seniority: 'JUNIOR',
  modality: 'PRESENCIAL',
  workingHours: '40',
  isClt: true,
  isInternship: true,
  isPj: true,
  isSearch: true,
  isJunior: true,
  isPleno: true,
  isSenior: true,
  isInPerson: false,
  isRemote: true,
  isHybrid: false,
  isHalfTime: false,
  isThreeQuarters: true,
  isFullTime: false,
};

describe('Resume Controller Tests', () => {
  it('should create an users resume and return 200', async () => {
    const authValue = `Bearer ${userInfo.token}`;
    const response = await request(server)
      .post(`/users/resume/create/`)
      .set('authorization', authValue)
      .send(resume);

    expect(response.body.state).toEqual('pernambuco');
    expect(response.statusCode).toBe(200);
  });

  it('Should get the users resume and return 200', async () => {
    const authValue = `Bearer ${userInfo.token}`;
    const response = await request(server)
      .get(`/users/resume/${userInfo.id}`)
      .set('authorization', authValue);

    expect(response.body.state).toEqual('pernambuco');
    expect(response.statusCode).toBe(200);
  });

  it('Should update the users resume and return 200', async () => {
    const authValue = `Bearer ${userInfo.token}`;
    const response = await request(server)
      .put(`/user/resume/update/${userInfo.id}`)
      .set('authorization', authValue)
      .send({ email: 'test2.user@gmail.com' });

    expect(response.body.email).toBe('test2.user@gmail.com');
    expect(response.statusCode).toBe(200);
  });

  // afterEach(async () => {
  //   Resume.destroy({ where: { userId: userInfo.id } });
  //   User.destroy({ where: { id: userInfo.id } });
  // });
});
beforeAll(async () => {
  await request(server).post('/users/create/').send(userInfo);
  const login = await request(server).post('/users/login/').send({
    email: userInfo.email,
    password: userInfo.password,
  });

  userInfo.id = login.body.userId;
  userInfo.token = login.body.token;
  resume.userId = login.body.userId;
});

afterAll(async () => {
  Resume.destroy({ where: { userId: userInfo.id } });
  User.destroy({ where: { id: userInfo.id } });
});
