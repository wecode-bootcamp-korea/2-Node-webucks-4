import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({ message });
});

export default app;
