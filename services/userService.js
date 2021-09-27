import dao from '../models';

const { userDao } = dao;

const createUser = async (email, password) => {
  return await userDao.createUser(email, password);
};

const isLoginCheck = async (email, password) => {
  return await userDao.isLoginCheck(email, password);
};

export default { createUser, isLoginCheck };
