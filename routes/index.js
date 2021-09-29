import express from 'express';
import userRouter from './userRouter';
import listRouter from './listRouter';
import productRouter from './productRouter';

const Router = express.Router();

Router.use('/user', userRouter);
Router.use('/list', listRouter);
Router.use('/product', productRouter);

export default Router;
