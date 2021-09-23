// import http from "http";
// import express from "express";
// import coffeeRouter from "./routes/coffee";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("dkdkdjkksd");
// });

// app.use("/coffee", coffeeRouter);

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

import http from "http";
import express from "express";

const app = express();

app.get("/products/categories", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        koreanName: "나이트로 바닐라 크림",
        englishName: "Nitro Vanilla Cream",
        category: "콜드 브루 커피",
        categoryId: 1,
        imageUrl:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg",
      },
      {
        id: 2,
        koreanName: "나이트로 콜드 브루",
        englishName: "Nitro Cold Brew",
        category: "콜드 브루 커피",
        categoryId: 1,
        imageUrl:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg",
      },
    ],
  });
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server running on PORT 8000!");
});
