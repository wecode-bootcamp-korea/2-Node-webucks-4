import express from "express";
import router from "./routes";
import {
  errorLogger,
  errorResponder,
  invalidPathHandler,
} from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

export default app;
