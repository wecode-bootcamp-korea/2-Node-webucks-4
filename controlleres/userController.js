import { userService } from '../services';

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(201).json({
      message: 'SUCCESS',
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const isCheck = (email, password) => {
  const isCheckEmail = email.includes('@') && email.includes('.com') && email;
  const isCheckPassword = password;
  if (!isCheckEmail) throw Error('이메일 형식이 잘못되었습니다');
  else if (!isCheckPassword)
    throw Error('비밀번호가 입력이 되어있지 않습니다.');
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    isCheck(email, password);
    const user = await userService.createUser(name, email, password);
    res.status(201).json({
      message: 'CREATED',
      data: user,
    });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

const isLoginCheck = async (req, res) => {
  try {
    const { email, password } = req.body;
    isCheck(email, password);
    const user = await userService.isLoginCheck(email, password);
    res.status(201).json({
      message: 'CREATED',
      data: user,
    });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

export default { findAllUsers, createUser, isLoginCheck };
