import ApiError from '../error/apiErrors';
import prisma from './Model';

const chechUserExists = async email => {
  return await prisma.$queryRaw`
  SELECT email
  FROM users
  WHERE email=${email};
  `;
};

const createUser = async userData => {
  const { email, password, username, address, phone_number, policy_agreed } =
    userData;
  await prisma.$queryRaw`
  INSERT INTO users 
  VALUES (default, ${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed}, default, default);
  `;

  const [createdAccount] = await prisma.$queryRaw`
  SELECT id, email, username, address, phone_number, policy_agreed
  FROM users 
  ORDER BY id DESC 
  LIMIT 1;
  `;

  return createdAccount;
};

const login = async email => {
  return await prisma.$queryRaw`
  SELECT users.id, users.password
  FROM users
  WHERE users.email=${email};
  `;
};

export default { chechUserExists, createUser, login };
