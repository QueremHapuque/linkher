import express from 'express';
import UserController from '../controllers/UserController';
import userAuth from '../middlewares/auth';

const router = express.Router();

router.post('/users/', userAuth, UserController.create);

export default router;
