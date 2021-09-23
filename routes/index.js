import express from "express";

import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import ListRouter from "./ListRouter";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/list", ListRouter);

export default router;
