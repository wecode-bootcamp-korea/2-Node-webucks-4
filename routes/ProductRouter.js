import express from "express";
import { ProductController } from "../controllers";
import { tokenHandelr } from "../middlewares";

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProduct);
router.post(
  "/like",
  tokenHandelr.validateToken,
  ProductController.flagProductLike
);
router.delete(
  "/like",
  tokenHandelr.validateToken,
  ProductController.flagProductLike
);

export default router;
