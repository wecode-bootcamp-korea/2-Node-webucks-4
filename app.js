import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
  next();
});

app.use((err, req, res, next) => {
  const { status, message, name } = err;
  res.status(status || 500).json({ name, message });
});

export default app;
