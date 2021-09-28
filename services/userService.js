import dao from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { userDao } = dao;

const encryptionPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

const checkEmail = async (email, userpassword) => {
  const user = await userDao.checkEmail(email);
  if (user == null) return '';
  const { id, password } = user;
  const ok = await bcrypt
    .compare(userpassword, password)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
  if (ok) return jwt.sign({ id }, 'zibu', { expiresIn: '3h' });
  else return '';
};

const createUser = async (email, password) => {
  const hashPassword = await encryptionPassword(password);
  return await userDao.createUser(email, hashPassword);
};

export default { createUser, checkEmail };
