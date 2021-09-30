import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs";
import { UserError } from "../errors";

const makeToken = (userId) => {
  try {
    const secret = jwtConfig.secret;
    let token = jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
    return token;
  } catch (err) {
    console.error(err);
    throw new UserError.TokenError();
  }
};

export { makeToken };
