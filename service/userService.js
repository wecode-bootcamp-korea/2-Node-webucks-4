import { userDAO } from '../model';
import * as encryption from '../middleware/ecryption';
import * as token from '../middleware/token';

const signinService = async userData => {
  userData.password = await encryption.encryptPw(userData.password);
  const createdAccont = await userDAO.signinDAO(userData);
  return createdAccont;
};

const loginService = async userData => {
  const { password: userInputPw } = userData.body;
  const [loginResult] = await userDAO.loginDAO(userData);
  const isMatch = await encryption.comparePw(userInputPw, loginResult.password);
  if (isMatch) return await token.issue(loginResult.id);
  else return null;
};

export { signinService, loginService };
