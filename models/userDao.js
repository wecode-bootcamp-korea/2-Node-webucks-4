import prisma from '../prisma';

const isExistEmail = async email => {
  const [isExist] = await prisma.$queryRaw`
    SELECT 
      email 
    FROM 
      users 
    WHERE 
      email =${email};
  `;
  if (isExist) throw new ReferenceError('이미 가입된 유저입니다.');
};

const findLastUser = async () => {
  const [newUsers] = await prisma.$queryRaw`
    SELECT
    u.id, 
    u.name, 
    u.email, 
    u.password
    FROM 
      users u
    ORDER BY id DESC
    LIMIT 1;
  `;
  return newUsers;
};

const createUser = async (email, password) => {
  await isExistEmail(email);
  await prisma.$queryRaw`
    INSERT INTO 
      users(
        email, 
        password
      ) 
    VALUES(
      ${email}, 
      ${password}
    );
  `;
  return findLastUser();
};

const isLoginCheck = async (email, password) => {
  const [isLogin] = await prisma.$queryRaw`
    SELECT
      id,
      email,
      password
    FROM
      users
    WHERE
      email = ${email}
      and
      password = ${password};
  `;
  return isLogin;
};

export default { createUser, isLoginCheck };
