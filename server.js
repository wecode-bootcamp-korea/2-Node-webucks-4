import http from "http";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/UserRouter";
// import app from "./app";
// import routes from "./routes";

const app = express();

app.use(express.json()); // for parsing application/json (for POST, PUT, etc. stuff with req.body)
app.use(router);
// app.use((err, req, res, next) => {
//   const { status, message } = err;
//   console.error(err);
//   res.status(status || 500).json({ message });
// });

dotenv.config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

// import prisma from "prisma"; //DELETE later
const server = http.createServer(app);
const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => {
      console.log(`server running on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    // await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다. //DELETE?
  }
};

start();

// <---------------------------------------------------------------------------------->

// import http from "http";
// import express from "express";
// import CoffeeRouter from "./routes/CoffeeRouter";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("dkdkdjkksd");
// });

// app.use("/coffee", CoffeeRouter);

// app.use((err, req, res, next) => {
//   const { status, message } = err;
//   console.error(err);
//   res.status(status || 500).json({ message });
// });

// const server = http.createServer(app);
// const PORT = 8000;

// const start = async () => {
//   try {
//     server.listen(PORT, () =>
//       console.log(`Server is listening on PORT ${PORT}`)
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };

// start();

// <---------------------------------------------------------------------------------->

// import http from "http";
// import express from "express";
// import dotenv from "dotenv";
// import { PrismaClient } from "@prisma/client";
// import userRouter from "./routes/userRouter";

// dotenv.config();
// const HOST = process.env.HOST;
// const PORT = process.env.PORT;

// const prisma = new PrismaClient();

// const app = express();
// app.use(express.json()); // for parsing application/json (look into this!)

// app.get("/users", async (req, res) => {
//   try {
//     const users = await prisma.$queryRaw`
//       SELECT email, password, policy_agreed
//       FROM users;
//     `;

//     res.json(users);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.post("/users/signup", async (req, res) => {
//   try {
//     const { email, password } = req.body; // gonna come from React project
//     console.log("email:", email, "password:", password);

//     await prisma.$queryRaw`
//       INSERT INTO users (email, password)
//       VALUES (${email}, ${password});
//     `;

//     const [createdUser] = await prisma.$queryRaw`
//       SELECT id, email
//       FROM users
//       WHERE email = ${email};
//     `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

//     console.log("createdUser:", createdUser);

//     res.json(createdUser);
//     // res.status(201).json({
//     //   user: {
//     //     id: createdUser.id,
//     //     email: createdUser.email,
//     //   },
//     // });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/products/categories", async (req, res) => {
//   try {
//     const categories = await prisma.$queryRaw`
//       SELECT c.id, c.name
//       FROM categories c
//     `;

//     res.json(categories);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.get("/products", async (req, res) => {
//   try {
//     const allProducts = await prisma.$queryRaw`
//       SELECT p.id, p.korean_name, p.english_name, c.name AS category, p.category_id, i.image_url
//       FROM products p
//       JOIN images i
//       ON p.id = i.product_id
//       JOIN categories c
//       ON p.category_id = c.id
//       ORDER BY c.id
//       ;
//     `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

//     res.json(allProducts);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.get("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [product] = await prisma.$queryRaw`
//       SELECT p.id, p.korean_name, p.english_name, p.description, p.category_id, c.name AS category, i.image_url, n.kcal, n.fat, n.protein, n.sodium, n.sugar, n.caffeine
//       FROM products p
//       JOIN categories c
//       ON p.category_id = c.id
//       JOIN images i
//       ON p.id = i.product_id
//       JOIN nutritions n
//       ON p.id = n.product_id
//       WHERE p.id = ${id};
//     `; // need to add allergens later

//     res.json(product);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.post("/products", async (req, res) => {
//   try {
//     await prisma.$queryRaw`
//       INSERT INTO products (korean_name, english_name, category_id)
//       VALUES ('카라멜 프라푸치노', 'Caramel Frappucino', 4);
//     `;

//     const [product] = await prisma.$queryRaw`
//       SELECT p.id, p.category_id, p.korean_name, p.english_name
//       FROM products p
//       ORDER BY id DESC
//       LIMIT 1;
//     `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

//     res.json(product);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// const server = http.createServer(app);

// const start = async () => {
//   // 서버를 시작하는 함수입니다.
//   try {
//     server.listen(PORT, () => {
//       console.log(`server running on ${HOST}:${PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
//   }
// };

// start();
