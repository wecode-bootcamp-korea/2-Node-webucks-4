import { loginService } from '../services';

const register = async (req, res) => {
  console.log('here is controller');
  const { email, password, username, address, phoneNumber } = req.body;
  await loginService.register(email, password, username, address, phoneNumber);
  const message = 'success';
  return res.json({ message });
};

const validUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userValidResult = await loginService.validUser(email, password);
    res.status(201).json(userValidResult);
  } catch (err) {
    console.log(err);
  }
};
export default { register, validUser };
