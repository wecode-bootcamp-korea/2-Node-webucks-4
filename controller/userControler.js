import { userService } from '../service';

const createUser = async (req, res) => {
  const userData = req.body;
  const createdAccont = await userService.createUser(userData);
  res.status(200).json(createdAccont);
};

const login = async (req, res) => {
  const userData = req.body;
  const loginResult = await userService.login(userData);
  loginResult
    ? res.status(200).json(loginResult)
    : res
        .status(400)
        .json({ message: '아이디 혹은 비밀번호가 일치하지 않습니다.' });
};

export default { createUser, login };
