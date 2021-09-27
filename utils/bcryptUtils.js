import bcrypt from "bcryptjs";
import { UserError } from "../errors";

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.error(err);
    throw new UserError.BcryptHashError();
  }
};

const comparePassword = async (inputPw, storedPw) => {
  try {
    return await bcrypt.compare(inputPw, storedPw);
  } catch (err) {
    console.error(err);
    throw new UserError.BcryptCompareError();
  }
};

export { hashPassword, comparePassword };
