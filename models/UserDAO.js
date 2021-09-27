import { prisma, Prisma } from "../prisma";

const getAllUsers = async () => {
  return await prisma.$queryRaw`SELECT * FROM users;`;
};

const registerUser = async (email, hashedPassword) => {
  try {
    return await prisma.$executeRaw`INSERT INTO users (email, password) VALUES(${email}, ${hashedPassword});`;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(err);
    }
  }
};

const getUserInfo = async (email) => {
  const [userInfo] =
    await prisma.$queryRaw`SELECT * FROM users WHERE email=${email};`;
  return userInfo;
};

export { getAllUsers, registerUser, getUserInfo };
