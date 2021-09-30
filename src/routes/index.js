import express from 'express';
const router = express.Router();

// import DetailRouter from './DetailRouter';
import productRouter from './productRouter';
import loginRouter from './loginRouter';

// router.use('/category', DetailRouter);
router.use('/product', productRouter);
router.use('/user', loginRouter);

export default router;
