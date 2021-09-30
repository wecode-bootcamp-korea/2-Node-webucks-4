import http from 'http';
import app from './app';
// import dotenv from 'dotenv';

// dotenv.config();
const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8000, () =>
      console.log('Webucks node server is listening on PORT 8000')
    );
  } catch (err) {
    console.error(err);
    // await prisma.$disconnect;
  }
};

start();
