import { UserService } from "../services";
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(201).json({ message: "SUCCESS", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email:", email);
    console.log("password:", password);

    const hash = await bcrypt.hash(password, 10);
    console.log("hash:", hash);

    const user = await UserService.createUser(email, hash);

    res.status(201).json({ message: "SUCCESS", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("EMAIL INPUT:", email);
  console.log("PASSWORD INPUT:", password);

  const user = await UserService.loginUser(email, password);
  console.log("user:", user);

  if (user == null) {
    return res.status(400).json({ message: "Cannot find user" });
  }

  try {
    const isCorrectPw = await bcrypt.compare(password, user.password);

    if (isCorrectPw) {
      res.json({ message: "LOGIN SUCCESS", data: user });
    } else {
      res.json({ message: "WRONG PASSWORD" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAllUsers, createUser, loginUser };
