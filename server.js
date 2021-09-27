import http from 'http';
import prisma from './prisma';
import app from './app';

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

start();
