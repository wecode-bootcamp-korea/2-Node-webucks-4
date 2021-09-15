const http = require("http");
import express from "express";
import router from "./router";

const app = express();

app.use(router);

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8000, () =>
      console.log("Webucks node server is listening on PORT 8000")
    );
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
