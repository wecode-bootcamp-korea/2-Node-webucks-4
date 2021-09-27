import prisma from '../model/Model';

const createService = async req => {
  const coffee = await prisma.$queryRaw`
  INSERT INTO products 
  VALUES (default, "라떼", "Latte", 1);
  `;

  const [createdData] = await prisma.$queryRaw`
  SELECT * 
  FROM products 
  ORDER BY id DESC LIMIT 1;
  `;

  console.log('coffee: ', coffee, 'createdData: ', createdData);

  return createdData;
};

module.exports = createService;
