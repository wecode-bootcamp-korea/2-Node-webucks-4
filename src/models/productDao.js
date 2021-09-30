import prisma from '../../prisma/prismaClient';

const getAllProducts = async () => {
  return await prisma.$queryRaw`
  SELECT * FROM products ;
  `;
};

export default { getAllProducts };
