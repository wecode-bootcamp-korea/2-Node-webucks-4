import prisma from '../prisma';

const findAllUsers = async () => {
  return await prisma.$queryRaw`
    SELECT
      id,
      name,
      email,
      password
    FROM
      users;
  `;
};

const createUser = async (name, email, password) => {
  console.log(name, email, password);
  try {
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
    console.error(err);
  }
};

export default { findAllUsers, createUser };
