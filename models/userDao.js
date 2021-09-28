import prisma from '../prisma';

const checkEmail = async email => {
  const [isEmail] = await prisma.$queryRaw`
    SELECT 
      id,
      email,
      password 
    FROM 
      users 
    WHERE 
      email =${email};
  `;
  return isEmail;
};

const findLastUser = async () => {
  const newUsers = await prisma.$queryRaw`
    SELECT
    u.id, 
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
  const isEmail = await checkEmail(email);
  if (isEmail) throw new ReferenceError('이메일이 존재합니다.');
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

export default { createUser, checkEmail };
