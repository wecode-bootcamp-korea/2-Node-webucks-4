import UserDao from "../models/UserDao";

console.log("UserService");

const getAllUsers = async () => {
  console.log("UserService getAllUsers before");
  const users = await UserDao.getAllUsers();
  console.log("UserService getAllUsers after");
  return users;
};

const createUser = async (email, password) => {
  return await UserDao.createUser(email, password);
};

export default { getAllUsers, createUser };
