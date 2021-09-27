import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler.errorLogger);
app.use(errorHandler.errorResponder);
app.use(errorHandler.invalidPathHandler);

export default app;
