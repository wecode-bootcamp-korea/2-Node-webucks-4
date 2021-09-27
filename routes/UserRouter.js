import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get("/users", UserController.getAllUsers);
router.post("/users/signup", UserController.createUser);

router.use((req, res, next) => {
  // DELETE?
  console.log("UserRouter Time: ", Date.now());
  next();
});

export default router;
