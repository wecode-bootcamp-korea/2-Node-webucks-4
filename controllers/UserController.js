import { UserService } from "../services";

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

    const user = await UserService.createUser(email, password);

    res.status(201).json({ message: "SUCCESS", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAllUsers, createUser };
