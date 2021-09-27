import app from './app';

const PORT = 8000;

const start = async () => {
  app.listen(PORT, () => {
    console.log('서버가 3000번에 열렸어요~');
  });
};

start();
