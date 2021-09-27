const http = require("http");
import app from "./app";
import prisma from "./prisma";
import { serverConfig } from "./configs";

const server = http.createServer(app);
const PORT = serverConfig.port;
const start = async () => {
  try {
    server.listen(PORT, () =>
      console.log(`Webucks node server is listening on PORT ${PORT}`)
    );
  } catch (err) {
    console.error(err);
    await prisma.$disconnect;
  }
};

start();
