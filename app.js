import express from 'express';
import Router from './routes';

const app = express();

app.use(express.json()); // 순서 개중요!
app.use(Router);

// error
app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

export default app;
