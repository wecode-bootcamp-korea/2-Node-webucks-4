import express from "express";
import router from "./routes";

const app = express();
app.use(router);

app.use((err, req, res, next) => {
  console.log("Error Handling Middleware called");
  console.log("Path: ", req.path);
  console.error("Error: ", err);
  const { status, message } = err;
  res.status(status || 500).json({ message });
});

export default app;
