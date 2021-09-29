import { userDAO } from '../model';
import encryption from '../middleware/ecryption';
import token from '../middleware/token';
import ApiError from '../error/apiErrors';

const chechUserExists = async email => {
  return !(await userDAO.chechUserExists(email));
};

const createUser = async userData => {
  userData.password = await encryption.encryptPw(userData.password);
  return await userDAO.createUser(userData);
};

const login = async userData => {
  const { password: userInputPw, email } = userData;
  const [userDataDB] = await userDAO.login(email);

  if (!userDataDB) {
    const err = ApiError.badRequest('Error : 존재하지 않는 ID입니다.');
    console.log(err.code + ' ' + err.message);
    return err;
  }

  const { password, id } = userDataDB;
  const isMatch = await encryption.comparePw(userInputPw, password);
  return isMatch ? await token.issue(id) : null;
};

export default { chechUserExists, createUser, login };
