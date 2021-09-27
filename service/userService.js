import { userDAO } from '../model';

const signinService = async req => {
  const createdAccont = await userDAO.signinDAO(req);
  return createdAccont;
};

const loginService = async req => {
  const loginResult = await userDAO.loginDAO(req);
  return loginResult;
};

export { signinService, loginService };
