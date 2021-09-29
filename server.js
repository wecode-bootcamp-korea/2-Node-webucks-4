import app from './middleware/app';

const PORT = 8000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`서버가 ${PORT}번에 열렸어요~`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
