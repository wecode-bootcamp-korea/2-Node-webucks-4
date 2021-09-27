import prisma from "../prisma";

console.log("UserDao");

const getAllUsers = async () => {
  console.log("UserDao getAllUsers before");
  const users = await prisma.$queryRaw`
    SELECT
      id,
      email,
      password
    FROM
      users;
  `;
  console.log("UserDao getAllUsers after");
  return users;
};

const createUser = async (email, password) => {
  await prisma.$queryRaw`
      INSERT INTO users (email, password)
      VALUES (${email}, ${password});
    `;

  const [createdUser] = await prisma.$queryRaw`
      SELECT id, email
      FROM users
      WHERE email = ${email};
    `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

  console.log("createdUser:", createdUser);
  return createdUser;
};

export default { getAllUsers, createUser };
