import { loginDao } from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = async (
  email,
  password,
  username,
  address,
  phoneNumber,
  policyAgreed
) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return await loginDao.register(
    email,
    hashedPassword,
    username,
    address,
    phoneNumber,
    policyAgreed
  );
};

const validUser = async (email, password) => {
  try {
    const [existingUser] = await loginDao.validUser(email);
    const isValidUser = await bcrypt.compare(password, existingUser.password);
    if (isValidUser) {
      const token = jwt.sign(
        { id: existingUser.id },
        'server_made_secret_key',
        { expiresIn: '1h' }
      );
      return { message: `반갑습니다 ${existingUser.username}님`, token };
    } else {
      return { message: `비밀번호가 맞지 않습니다` };
    }
  } catch (err) {
    return { message: '존재하지 않는 이메일입니다' };
  }
};

export default { register, validUser };
