import { userService } from '../service';

const signinControler = async (req, res) => {
  const userData = req.body;
  const createdAccont = await userService.signinService(userData);
  res.json(createdAccont);
};

const loginControler = async (req, res) => {
  const userData = req;
  const loginResult = await userService.loginService(userData);
  loginResult
    ? res.json(loginResult)
    : res.json({ message: '아이디 혹은 비밀번호가 일치하지 않습니다.' });
};

export { signinControler, loginControler };
