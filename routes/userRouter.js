import express from 'express';
import controller from '../controlleres';

const { userController } = controller;
const userRouter = express.Router();

userRouter.post('/sign', userController.createUser);
userRouter.get('/login', userController.isLoginCheck);

export default userRouter;
