import express from "express";

import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import ListRouter from "./ListRouter";
import { CommonError } from "../errors";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "WELCOME" });
});

router.use("/users", UserRouter);
router.use("/products", ProductRouter);
router.use("/list", ListRouter);

router.get("/not-found", (req, res, next) => {
  throw new CommonError.NotFoundError();
});

export default router;
