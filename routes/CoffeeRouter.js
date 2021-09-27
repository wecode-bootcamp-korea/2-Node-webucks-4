import express from "express";
import createController from "../controllers/createController";

const router = express.Router();

router.post("/create", createController);

module.exports = router;
