import prisma from '../../prisma/prismaClient';

const getProducts = async () => {
  console.log('here is Dao');
  return await prisma.$queryRaw`
  SELECT * FROM products ;
  `;
};

module.exports = { getProducts };

// app.post('/products', async (req, res) => {
//   const categoryId = req.body.categoryId;
//   res.status(200).json({
//     myDrink: drinks,
//   });
// });
