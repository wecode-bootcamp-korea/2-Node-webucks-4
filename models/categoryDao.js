import prisma from '../prisma';

const findAllCategories = async () => {
  const categories = await prisma.$queryRaw`
    SELECT
      c.id,
      c.name
    FROM 
      categories c;
  `;
  return categories;
};

export default { findAllCategories };
