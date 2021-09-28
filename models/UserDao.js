import prisma from "../prisma";

const getAllUsers = async () => {
  return await prisma.$queryRaw`
    SELECT
      id,
      email,
      password
    FROM
      users;
  `;
};

const createUser = async (email, password) => {
  await prisma.$queryRaw`
    INSERT INTO
      users (email, password)
    VALUES
      (${email}, ${password});
  `;

  const [createdUser] = await prisma.$queryRaw`
    SELECT
      id,
      email,
      password
    FROM
      users
    WHERE
      email = ${email};
  `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

  return createdUser;
};

const loginUser = async (email, password) => {
  const [user] = await prisma.$queryRaw`
    SELECT
      id,
      email,
      password
    FROM
      users
    WHERE
      email = ${email}
    ;
  `;

  return user;
};

export default { getAllUsers, createUser, loginUser };
