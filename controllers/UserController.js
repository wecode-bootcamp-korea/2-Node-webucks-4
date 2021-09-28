import { UserService } from "../services";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY;

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(201).send({ message: "SUCCESS", data: users });
  } catch (error) {
    res.status(500).send({ message: error.message });
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

    res.status(201).send({ message: "SUCsCESS", data: user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("EMAIL INPUT:", email);
  console.log("PASSWORD INPUT:", password);

  const user = await UserService.loginUser(email);
  console.log("user:", user);

  if (user == null) {
    return res.status(400).send({ message: "Cannot find user" });
  }

  try {
    const isCorrectPw = await bcrypt.compare(password, user.password);

    if (isCorrectPw) {
      console.log("CORRECT PASSWORD, user.id: ", user.id);
      const accessToken = jwt.sign({ id: user.id }, ACCESS_TOKEN_KEY, {
        expiresIn: "1h",
      });
      console.log("accessToken:", accessToken);

      res.send({ message: "LOGIN SUCCESS", accessToken });
    } else {
      res.send({ message: "WRONG PASSWORD" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default { getAllUsers, createUser, loginUser };
