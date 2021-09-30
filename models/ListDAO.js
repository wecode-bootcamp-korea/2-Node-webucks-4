import { prisma } from "../prisma";

const getAllCategories = async () => {
  // return await prisma.$queryRaw`SELECT * FROM categories`;
  return await prisma.category.findMany();
};

export { getAllCategories };
