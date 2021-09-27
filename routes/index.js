import express from "express";
import UserRouter from "./UserRouter";

const router = express.Router();

router.use("/users", UserRouter); // '/products' 엔드포인트를 처리하기 위해 ProductRouter 를 붙여줍니다.

module.exports = router;
