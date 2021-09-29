import { userDAO } from '../model';
import encryption from '../middleware/ecryption';
import token from '../middleware/token';

const createUser = async userData => {
  // 중복확인 (미구현)
  userData.password = await encryption.encryptPw(userData.password);
  return await userDAO.createUser(userData);
};

const login = async userData => {
  const { password: userInputPw } = userData;
  const [loginResult] = await userDAO.login(userData);
  const isMatch = await encryption.comparePw(userInputPw, loginResult.password);
  if (isMatch) return await token.issue(loginResult.id);
  else return null;
};

export default { createUser, login };
