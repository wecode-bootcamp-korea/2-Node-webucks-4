import prisma from '../prisma';

const findAllUsers = async () => {
  try {
    return await prisma.$queryRaw`
      SELECT
        id,
        name,
        email,
        password
      FROM
        users;
    `;
  } catch (err) {
    throw err;
  }
};

const isExistEmail = async email => {
  try {
    const [isExist] = await prisma.$queryRaw`
      SELECT 
        email 
      FROM 
        users 
      WHERE 
        email =${email};
    `;
    if (isExist) throw Error('이미 가입된 유저입니다.');
  } catch (err) {
    throw err;
  }
};

const createUser = async (name, email, password) => {
  try {
    await isExistEmail(email);
    await prisma.$queryRaw`
      INSERT INTO 
        users(
          name, 
          email, 
          password
        ) 
      VALUES(
        ${name}, 
        ${email}, 
        ${password}
      );
    `;
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
  } catch (err) {
    throw err;
  }
};

const isLoginCheck = async (email, password) => {
  try {
    const [isLogin] = await prisma.$queryRaw`
      SELECT
        id,
        name,
        email,
        password
      FROM
        users
      WHERE
        email = ${email}
        and
        password = ${password};
    `;
    if (!isLogin)
      throw Error('일치하는 회원정보가 없습니다. 회원가입을 해주세요');
    return isLogin;
  } catch (err) {
    throw err;
  }
};

export default { findAllUsers, createUser, isExistEmail, isLoginCheck };
