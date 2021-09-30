import { UserDAO } from "../models";
import { CommonError, UserError } from "../errors";
import { authUtils, bcryptUtils, wrapperUtils } from "../utils";

const getAllUsers = async () => {
  const userInfos = await UserDAO.getAllUsers();
  if (userInfos.length === 0) {
    throw new CommonError.NotFoundError();
  }
  return userInfos;
};

const registerUser = async (email, password) => {
  const hashedPassword = await bcryptUtils.hashPassword(password);
  wrapperUtils.dataRecordWrapper(
    await UserDAO.registerUser(email, hashedPassword),
    new UserError.EmailDuplicateError(),
    1
  );
};

const verifyLoginUser = async (email, password) => {
  const storedUserInfo = await getUserInfoByEmail(email);
  if (!storedUserInfo) {
    throw new UserError.NonExistentEmailError();
  }
  const storedPassword = storedUserInfo.password;
  if (!(await bcryptUtils.comparePassword(password, storedPassword))) {
    throw new UserError.InvaildPasswordError();
  }
  const userId = storedUserInfo.id;
  return authUtils.makeToken(userId);
};

const getUserInfoByEmail = async (email) => {
  const foundUserInfo = await UserDAO.getUserInfoByEmail(email);
  if (!foundUserInfo) {
    throw new CommonError.NotFoundError();
  }
  return foundUserInfo;
};

const getUserInfoById = async (id) => {
  const foundUserInfo = await UserDAO.getUserInfoById(id);
  if (!foundUserInfo) {
    throw new CommonError.NotFoundError();
  }
  return foundUserInfo;
};

export { getAllUsers, registerUser, verifyLoginUser, getUserInfoById };
