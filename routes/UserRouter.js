import express from "express";
import { UserController } from "../controllers";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);

router.use((req, res, next) => {
  // DELETE?
  console.log("UserRouter Time: ", Date.now());
  next();
});

export default router;
