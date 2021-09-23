import express from "express";
import { UserController } from "../controllers";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/register", UserController.registerUser);

export default router;
