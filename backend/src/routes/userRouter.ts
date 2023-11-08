import express from 'express';
import UserControler from '../controllers/UserControler';

const router = express.Router();

router.post('/users/', UserControler.create);
router.put('/user/update/:id', UserControler.update);

export default router;
