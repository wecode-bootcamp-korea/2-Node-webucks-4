import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();
const { PORT } = process.env;

app.post('/categories', async (req, res) => {
  const category = await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES ("라떼");
  `;

  // const [category] = await prisma.$queryRaw`
  // SELECT c.id, c.name
  // FROM  categories c
  // ORDER BY id DESC
  // LIMIT 1
  // `;
});
app.post('/categories', async (req, res) => {
  const category = await prisma.category.create({
    data: {
      name: '콜드브루',
    },
  });
});

app.get('/categories', async (req, res) => {
  const categories = await prisma.category.findMany();

  res.json(categories);
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });
// app.listen(PORT, () => console.log(`server on ${PORT}`));
