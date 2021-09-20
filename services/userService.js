import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const createUser = async (name, email, password) => {
  return await userDao.createUser(name, email, password);
};

export default { findAllUsers, createUser };
