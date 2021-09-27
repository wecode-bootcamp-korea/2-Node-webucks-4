import service from '../services';

const { userService } = service;

const resMessage = (res, message, data) => {
  res.status(201).json({
    name: 'Sucess',
    message,
    data,
  });
};

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.createUser(email, password, next);
    resMessage(res, '회원가입 성공~!', user);
  } catch (err) {
    next(err);
  }
};

const isLoginCheck = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.isLoginCheck(email, password);
    if (!user) {
      resMessage(res, '로그인 실패~!');
    } else {
      resMessage(res, '로그인 성공~!', user);
    }
  } catch (err) {
    next(err);
  }
};

export default { createUser, isLoginCheck };
