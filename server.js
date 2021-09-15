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
