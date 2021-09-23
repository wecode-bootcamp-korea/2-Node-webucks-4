import { UserService } from "../services";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const message = await UserService.registerUser(email, password);
    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, registerUser };
