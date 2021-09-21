import { userDao } from '../models';

const findAllUsers = async () => {
  try {
    return await userDao.findAllUsers();
  } catch (err) {
    throw err;
  }
};

const isExistEmail = async email => {
  try {
    return await userDao.isExistEmail(email);
  } catch (err) {
    throw err;
  }
};

const createUser = async (name, email, password) => {
  try {
    return await userDao.createUser(name, email, password);
  } catch (err) {
    throw err;
  }
};

const isLoginCheck = async (email, password) => {
  try {
    return await userDao.isLoginCheck(email, password);
  } catch (err) {
    throw err;
  }
};

export default { findAllUsers, createUser, isExistEmail, isLoginCheck };
