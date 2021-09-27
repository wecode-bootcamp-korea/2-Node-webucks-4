import express from "express";

import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import ListRouter from "./ListRouter";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/list", ListRouter);

router.get("/not-found", (req, res) => {
  res.status(404).json({ message: "존재하지 않는 URL입니다." });
});

export default router;
