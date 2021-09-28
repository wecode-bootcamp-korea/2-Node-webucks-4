import { UserDao } from "../models";

const getAllUsers = async () => {
  return await UserDao.getAllUsers();
};

const createUser = async (email, password) => {
  return await UserDao.createUser(email, password);
};

const loginUser = async (email, password) => {
  return await UserDao.loginUser(email, password);
};

export default { getAllUsers, createUser, loginUser };
