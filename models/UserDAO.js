import { prisma, Prisma } from "../prisma";

const getAllUsers = async () => {
  return await prisma.$queryRaw`
    SELECT * FROM users;`;
};

const registerUser = async (email, hashedPassword) => {
  try {
    return await prisma.$executeRaw`
      INSERT INTO users (
        email, 
        password
      ) VALUES(
        ${email}, 
        ${hashedPassword}
      );`;
  } catch (err) {
    console.error(err);
  }
};

const getUserInfoByEmail = async (email) => {
  const [userInfo] = await prisma.$queryRaw`
      SELECT * FROM users 
      WHERE email = ${email};`;
  return userInfo;
};

const getUserInfoById = async (id) => {
  const [userInfo] = await prisma.$queryRaw`
      SELECT * FROM users 
      WHERE id = ${id};`;
  return userInfo;
};

export { getAllUsers, registerUser, getUserInfoByEmail, getUserInfoById };
