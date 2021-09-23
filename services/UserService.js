import { UserDAO } from "../models";

const getAllUsers = async () => {
  return await UserDAO.getAllUsers();
};

const registerUser = async (email, password) => {
  const message =
    (await UserDAO.registerUser(email, password)) === 1
      ? "REGISTER SUCCESS"
      : "REGISTER FAILED";
  return message;
};

export { getAllUsers, registerUser };
