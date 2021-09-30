import express from 'express';
const router = express.Router();

// import categoryRouter from './categoryRouter';
import productRouter from './productRouter';
import loginRouter from './loginRouter';

// router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/user', loginRouter);

export default router;
