import prisma from './Model';

const signinDAO = async userData => {
  const { email, password, username, address, phone_number, policy_agreed } =
    userData;
  await prisma.$queryRaw`
  INSERT INTO users 
  VALUES (default, ${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed});
  `;

  const [createdAccount] = await prisma.$queryRaw`
  SELECT id, email, username, address, phone_number, policy_agreed
  FROM users 
  ORDER BY id DESC 
  LIMIT 1;
  `;

  return createdAccount;
};

const loginDAO = async userData => {
  const { email } = userData.body;

  const loginData = await prisma.$queryRaw`
  SELECT users.id, users.password
  FROM users
  WHERE users.email=${email};
  `;

  return loginData;
};

export { signinDAO, loginDAO };
