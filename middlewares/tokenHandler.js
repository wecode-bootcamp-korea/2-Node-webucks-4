import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs";
import { CommonError } from "../errors";
import { UserService } from "../services";

const { secret } = jwtConfig;

const validateToken = async (req, res, next) => {
  try {
    const reqAuthValue = req.headers.authorization;
    if (!reqAuthValue) {
      throw new CommonError.AuthError();
    }
    const token = reqAuthValue.substring(7);
    const { id } = jwt.verify(token, secret);
    const foundUserInfo = await UserService.getUserInfoById(id);
    req.foundUserInfo = foundUserInfo;
    next();
  } catch (err) {
    next(err);
  }
};

export { validateToken };
