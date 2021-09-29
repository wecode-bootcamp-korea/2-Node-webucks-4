import express from "express";
import { ProductController } from "../controllers";

const router = express.Router();

router.get("/categories", ProductController.getCategories);
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.createProduct);

router.use((req, res, next) => {
  // DELETE?
  console.log("ProductRouter Time: ", Date.now());
  next();
});

export default router;
