import express from 'express';
import Router from '../routes';
import dotenv from 'dotenv';
import apiErrorHandler from '../error/apiErrorHandler';

const app = express();

dotenv.config();
app.use(express.json()); // 순서 개중요!
app.use(Router);
// app.use(apiErrorHandler);

// error
app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res
    .status(status || 500)
    .json({ message: '예상치 못한 에러가 발생했어요 ㅠ' });
});

export default app;
