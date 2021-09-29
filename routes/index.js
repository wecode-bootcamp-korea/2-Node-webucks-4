import express from 'express';

import userRouter from './userRouter';
import productRouter from './productRouter';
import categoryRouter from './categoryRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);

export default router;
