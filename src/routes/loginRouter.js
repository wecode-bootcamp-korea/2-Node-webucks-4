import express from 'express';
import { loginController } from '../controllers';

const router = express.Router();

router.post('/signup', loginController.register);
router.post('/login', loginController.validUser);

export default router;
