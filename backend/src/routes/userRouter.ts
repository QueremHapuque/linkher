import express from 'express';
import UserController from '../controllers/UserController';
import userAuth from '../middlewares/auth';

const router = express.Router();

router.post('/users/', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users/test', userAuth, UserController.test);

export default router;
