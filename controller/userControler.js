import { userService } from '../service';

const signinControler = async (req, res) => {
  const createdAccont = await userService.signinService(req);
  res.json(createdAccont);
};

const loginControler = async (req, res) => {
  const loginResult = await userService.loginService(req);
  res.json(loginResult);
};

export { signinControler, loginControler };
