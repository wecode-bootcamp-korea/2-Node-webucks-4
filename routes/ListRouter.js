import express from "express";
import { ListController } from "../controllers";

const router = express.Router();

router.get("/", ListController.getAllCategories);

export default router;
