import jwt from "jsonwebtoken";
import { jwtConfig } from "../config";

const makeToken = (userId) => {
  const secret = jwtConfig.secret;
  const token = jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
  return token;
};

export { makeToken };
