import service from '../services';

const { userService } = service;

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.createUser(email, password);
    if (user) resMessage(201, res, '회원가입 성공~!', user);
    else resMessage(401, res, '회원가입 실패 ~!', user);
  } catch (err) {
    next(err);
  }
};

const checkEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.checkEmail(email, password);
    if (user) resMessage(201, res, '로그인 성공~!', user);
    else resMessage(401, res, '로그인 실패~!');
  } catch (err) {
    next(err);
  }
};

export default { createUser, checkEmail };
