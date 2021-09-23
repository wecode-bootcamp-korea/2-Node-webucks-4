import prisma from "../prisma";

const getAllUsers = async () => {
  return await prisma.$queryRaw`SELECT * FROM users`;
};

const registerUser = async (email, password) => {
  return await prisma.$executeRaw`INSERT INTO users (email, password) VALUES(${email}, ${password})`;
};

export { getAllUsers, registerUser };
