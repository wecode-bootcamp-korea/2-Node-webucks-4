import express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get("/products/categories", ProductController.getCategories);
router.get("/products/:id", ProductController.getProduct);
router.get("/products", ProductController.getAllProducts);
router.post("/products", ProductController.createProduct);

router.use((req, res, next) => {
  // DELETE?
  console.log("ProductRouter Time: ", Date.now());
  next();
});

export default router;
