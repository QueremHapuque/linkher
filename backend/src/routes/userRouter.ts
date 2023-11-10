import express from 'express';
import UserController from '../controllers/UserController';
import userAuth from '../middlewares/auth';
import ResumeController from '../controllers/ResumeController';

const router = express.Router();

router.post('/users/', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users/test', userAuth, UserController.test);
router.put('/user/update/:id', UserController.update);

router.get('/users/resume/:id', userAuth, ResumeController.get);
router.post('/users/resume/create', userAuth, ResumeController.create);

export default router;
