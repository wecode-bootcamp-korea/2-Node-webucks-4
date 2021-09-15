import http from 'http';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hellog back world');
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('서버가 8000번 포트로 열렸습니다!');
});
