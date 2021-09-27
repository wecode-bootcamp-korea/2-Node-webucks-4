import express from 'express';
import userRouter from './userRouter';
import listRouter from './listRouter';
import detailRouter from './detailRouter';

const Router = express.Router();

Router.use('/user', userRouter);
Router.use('/list', listRouter);
Router.use('/detail', detailRouter);

export default Router;
