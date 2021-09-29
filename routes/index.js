import express from "express";
const router = express.Router();

import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";

router.use("/users", UserRouter);
router.use("/products", ProductRouter);

export default router;
