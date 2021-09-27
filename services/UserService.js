import { UserDAO } from "../models";
import { UserError } from "../errors";
import { authUtils, bcryptUtils } from "../utils";

const getAllUsers = async () => {
  return await UserDAO.getAllUsers();
};

const registerUser = async (email, password) => {
  const hashedPassword = await bcryptUtils.hashPassword(password);
  const isRegistered =
    (await UserDAO.registerUser(email, hashedPassword)) === 1;
  if (!isRegistered) {
    throw new UserError.EmailDuplicateError();
  }
  return "회원가입 성공";
};

const verifyLoginUser = async (email, password) => {
  const storedUserInfo = await getUserInfo(email);
  if (storedUserInfo == null) {
    throw new UserError.NonExistentEmailError();
  }
  const storedPassword = storedUserInfo.password;
  if (!(await bcryptUtils.comparePassword(password, storedPassword))) {
    throw new UserError.InvaildPasswordError();
  }
  const userId = storedUserInfo.id;
  return authUtils.makeToken(userId);
};

const getUserInfo = async (email) => {
  return await UserDAO.getUserInfo(email);
};

export { getAllUsers, registerUser, verifyLoginUser };
