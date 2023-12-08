import express from 'express';
import JobVacancieController from '../controllers/JobVacancieController';
import RefreshTokenController from '../controllers/RefreshTokenController';
import ResumeController from '../controllers/ResumeController';
import UserController from '../controllers/UserController';
import userAuth from '../middlewares/auth';
import verifyRefreshToken from '../middlewares/refreshToken';

const router = express.Router();

router.post('/users/create', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users/test', userAuth, UserController.test);
router.put('/user/update/:id', UserController.update);
router.get('/user/email/:id', userAuth, UserController.getUserEmail);

router.get('/users/resume/:id', userAuth, ResumeController.get);
router.post('/users/resume/create', userAuth, ResumeController.create);
router.put('/user/resume/update/:id', userAuth, ResumeController.Update);

router.get('/users/jobVacancie/:id', userAuth, JobVacancieController.get);
router.post(
  '/users/jobVacancie/create',
  userAuth,
  JobVacancieController.create,
);
router.put(
  '/user/jobVacancie/update/:id',
  userAuth,
  JobVacancieController.update,
);

router.post(
  '/refresh-token',
  verifyRefreshToken,
  RefreshTokenController.verifyToken,
);

export default router;
