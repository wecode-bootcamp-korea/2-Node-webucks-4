import bcrypt from "bcryptjs";
import { UserDAO } from "../models";
import { UserError } from "../errors";
import { authUtils } from "../utils";

const getAllUsers = async () => {
  return await UserDAO.getAllUsers();
};

const registerUser = async (email, password) => {
  const hashedPassword = await bcryptPassword(password);
  const isRegistered =
    (await UserDAO.registerUser(email, hashedPassword)) === 1;
  if (!isRegistered) {
    throw new UserError.RegisterFailedError();
  }
  return "회원가입 성공";
};

const verifyLoginUser = async (email, password) => {
  const storedUserInfo = await getUserInfo(email);
  if (storedUserInfo.length === 0) {
    throw new UserError.LoginFailedError();
  }
  const storedPassword = storedUserInfo[0].password;
  if (!(await bcrypt.compare(password, storedPassword))) {
    throw new UserError.LoginFailedError();
  }
  const userId = storedUserInfo[0].id;
  return authUtils.makeToken(userId);
};

const bcryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const getUserInfo = async (email) => {
  return await UserDAO.getUserInfo(email);
};

export { getAllUsers, registerUser, verifyLoginUser };
