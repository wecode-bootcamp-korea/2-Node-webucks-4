import express from "express";
import { ProductController } from "../controllers";

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProduct);

export default router;
