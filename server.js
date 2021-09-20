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

// const PORT = 7000 || process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.post('/categories', async (req, res) => {
//   await prisma.$queryRaw`
//     INSERT INTO categories (name)
//     VALUES ('콜드 브루');
//   `;
//   const [category] = await prisma.$queryRaw`
//     SELECT c.id, c.name
//     FROM categories c
//     ORDER BY id DESC
//     LIMIT 1;
//   `;
//   res.json(category);
// });

// app.get('/categories',async(req, res) => {
//   const category = await prisma.$queryRaw`
//   SELECT c.id, c.name FROM categories c;
//   `;
//   res.json(category);
// });

// app.get('/products',async(req, res) => {
//   const products = await prisma.$queryRaw`
//   SELECT c.id, c.korean_name, c.category_id, i.image_url
//   FROM products c, images i WHERE c.id = i.product_id;
//   `;
//   res.json(products);
// });

// app.get('/product',async(req, res) => {
//   const product = await prisma.$queryRaw`
//   SELECT c.id, c.korean_name, c.english_name, c.category_id, i.image_url, d.content
//   FROM products c, images i, description d WHERE c.id = i.product_id and c.id = d.product_id;
//   `;
//   res.json(product);
// });

// app.listen(PORT, (err) => {
//   if (!err) {
//     console.log(`Server is running on ${PORT}`);
//   } else {
//     console.log(err);
//   }
// });
