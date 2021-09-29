import { userService } from '../service';
import ApiError from '../error/apiErrors';

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const { email, password, policy_agreed } = userData;

    if (!(email && password && policy_agreed)) {
      const err = ApiError.badRequest('Error : 필수 정보가 누락되었습니다.');
      res.status(err.code).json(err);
      console.log(err.code + ' ' + err.message);
      return;
    }

    const accountExists = await userService.chechUserExists(email);
    if (accountExists) {
      const err = ApiError.badRequest('Error : 이미 가입된 회원입니다.');
      res.status(err.code).json(err);
      console.log(err.code + ' ' + err.message);
      return;
    }

    const createdAccont = await userService.createUser(userData);
    res.status(200).json({ message: 'SUCCESS', result: createdAccont });
    console.log(`USER CREATED : ${createdAccont.id} ${createdAccont.username}`);
    //
  } catch (err) {
    console.error(err);
    res.status(err.statusCode || 500).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const userData = req.body;
    const { email, password } = userData;

    if (!(email && password)) {
      const err = ApiError.badRequest('Error : 필수 정보가 누락되었습니다.');
      res.status(err.code).json(err);
      console.log(err.code + ' ' + err.message);
      return;
    }

    const loginResult = await userService.login(userData);
    if (loginResult instanceof ApiError) res.json(loginResult);
    else if (!loginResult)
      res
        .status(400)
        .json({ message: '아이디 혹은 비밀번호가 일치하지 않습니다.' });
    else {
      res.status(200).json({ message: 'SUCCESS', token: loginResult });
      console.log(`LOGIN SUCCESS : ${userData.email}`);
    }
    //
  } catch (err) {
    console.error(err);
    res.status(err.statusCode || 500).json(err.message);
  }
};

export default { createUser, login };
