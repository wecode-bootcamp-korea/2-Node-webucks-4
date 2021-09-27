import UserDao from "../models/UserDao";

const getAllUsers = async () => {
  return await UserDao.getAllUsers();
};

const createUser = async (email, password) => {
  return await UserDao.createUser(email, password);
};

export default { getAllUsers, createUser };
