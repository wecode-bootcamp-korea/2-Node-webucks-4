import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

console.log("UserRouter");

router.get("/users", UserController.getAllUsers);
router.post("/users/signup", UserController.createUser);
// router.post("/users", UserController.createUser);

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

export default router;
