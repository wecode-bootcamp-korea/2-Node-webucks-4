import express from 'express';
import controller from '../controlleres';

const { userController } = controller;
const router = express.Router();

router.post('/sign', userController.createUser);
router.post('/login', userController.checkEmail);

export default router;
