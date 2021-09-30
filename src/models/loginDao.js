import prisma from '../../prisma/prismaClient';

const register = async (
  email,
  hashedPassword,
  username,
  address,
  phoneNumber,
  policyAgreed
) => {
  console.log('here is dao');
  return await prisma.$queryRaw`
    INSERT INTO users 
    (email, password, username, address, phone_number, policy_agreed) 
    VALUES(${email}, ${hashedPassword}, ${username}, ${address}, ${phoneNumber}, ${policyAgreed});`;
};

const validUser = async email => {
  return await prisma.$queryRaw`
    SELECT
      u.id,
      u.email,
      u.password,
      u.username
    FROM
      users u
    WHERE u.email = ${email};
  `;
};

export default { register, validUser };
