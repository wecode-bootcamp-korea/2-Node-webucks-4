import prisma from './Model';

const signinDAO = async req => {
  const { email, password, username, address, phone_number, policy_agreed } =
    req.body;

  await prisma.$queryRaw`
  INSERT INTO users 
  VALUES (default, ${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed});
  `;

  const [createdAccount] = await prisma.$queryRaw`
  SELECT * 
  FROM users 
  ORDER BY id DESC 
  LIMIT 1;
  `;

  return createdAccount;
};

const loginDAO = async req => {
  const { email } = req.body;

  const loginData = await prisma.$queryRaw`
  SELECT users.id, users.email, users.password, users.username
  FROM users
  WHERE users.email=${email};
  `;

  return loginData;
};

export { signinDAO, loginDAO };
