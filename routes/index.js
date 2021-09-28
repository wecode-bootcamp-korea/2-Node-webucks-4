import express from "express";

import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import ListRouter from "./ListRouter";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome Webucks API Node Server" });
});

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/list", ListRouter);

router.get("/not-found", (req, res, next) => {
  res.status(404).json({ message: "URL_NOT_FOUND" });
});

export default router;
