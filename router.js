import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.json({ message: "/ endpoint" });
});

router.get("/products/category", async (req, res) => {
  try {
    const categories = await prisma.categories.findMany();
    res.status(200).json({ data: categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products =
      await prisma.$queryRaw`SELECT p.id, p.korean_name, p.english_name, c.name, p.category_id, i.image_url 
        FROM products AS p 
        LEFT JOIN categories AS c 
        ON p.category_id = c.id 
        LEFT JOIN images AS i 
        ON p.id = i.product_id`;

    products.forEach((product) => {
      product.koreanName = product.korean_name;
      delete product.korean_name;
      product.englishName = product.english_name;
      delete product.english_name;
      product.category = product.name;
      delete product.name;
      product.categoryId = product.category_id;
      delete product.category_id;
      product.imageUrl = product.image_url;
      delete product.image_url;
    });

    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const productInfo =
      await prisma.$queryRaw`SELECT p.id, p.korean_name, p.english_name, pd.description, i.image_url 
      FROM products AS p 
      LEFT JOIN product_descriptions AS pd
      ON p.id = pd.product_id
      LEFT JOIN images AS I
      ON p.id = i.product_id
      WHERE p.id = ${id}`;

    const allergens = await prisma.$queryRaw`SELECT a.name FROM allergies AS a 
      LEFT JOIN products_allergies AS pa
      ON a.id = pa.allergy_id
      WHERE pa.product_id = ${id}`;

    const nutritionInfo =
      await prisma.$queryRaw`SELECT name, amount FROM nutritions WHERE product_id = ${id}`;

    const data = {
      id: productInfo[0].id,
      koreanName: productInfo[0].korean_name,
      englishName: productInfo[0].english_name,
      description: productInfo[0].description,
      imageURL: productInfo[0].image_url,
      allergens: allergens,
      nutritionInfo: {
        calories: `${
          typeof nutritionInfo[0] === "undefined" ? 0 : nutritionInfo[0].amount
        }`,
        fat: `${
          typeof nutritionInfo[1] === "undefined" ? 0 : nutritionInfo[1].amount
        }g`,
        sodium: `${
          typeof nutritionInfo[3] === "undefined" ? 0 : nutritionInfo[3].amount
        }mg`,
        protein: `${
          typeof nutritionInfo[2] === "undefined" ? 0 : nutritionInfo[2].amount
        }g`,
        caffeine: `${
          typeof nutritionInfo[5] === "undefined" ? 0 : nutritionInfo[5].amount
        }mg`,
      },
    };

    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
