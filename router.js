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
    // const categories = await prisma.$queryRaw`SELECT * FROM categories;`;
    const categories = await prisma.categories.findMany();
    res.status(200).json({ data: categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products =
      // await prisma.$queryRaw`SELECT p.id, p.korean_name, p.english_name, c.name, p.category_id, i.image_url
      //   FROM products AS p
      //   LEFT JOIN categories AS c
      //   ON p.category_id = c.id
      //   LEFT JOIN images AS i
      //   ON p.id = i.product_id;`;

      await prisma.products.findMany({
        include: {
          Categories: {
            select: {
              category: true,
            },
          },
          Images: {
            select: {
              imageUrl: true,
            },
          },
        },
      });
    res.status(200).json({ data: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // const productInfo =
    //   await prisma.$queryRaw`SELECT p.id, p.korean_name, p.english_name, pd.description, i.image_url
    //   FROM products AS p
    //   LEFT JOIN product_descriptions AS pd
    //   ON p.id = pd.product_id
    //   LEFT JOIN images AS I
    //   ON p.id = i.product_id
    //   WHERE p.id = ${id};`;

    // const allergens = await prisma.$queryRaw`SELECT a.name FROM allergies AS a
    //   LEFT JOIN products_allergies AS pa
    //   ON a.id = pa.allergy_id
    //   WHERE pa.product_id = ${id};`;

    // const nutritionInfo =
    //   await prisma.$queryRaw`SELECT name, amount FROM nutritions WHERE product_id = ${id};`;

    // const data = {
    //   id: productInfo[0].id,
    //   koreanName: productInfo[0].korean_name,
    //   englishName: productInfo[0].english_name,
    //   description: productInfo[0].description,
    //   imageURL: productInfo[0].image_url,
    //   allergens: allergens,
    //   nutritionInfo: {
    //     calories: `${nutritionInfo[0] == null ? 0 : nutritionInfo[0].amount}`,
    //     fat: `${nutritionInfo[1] == null ? 0 : nutritionInfo[1].amount}g`,
    //     sodium: `${nutritionInfo[3] == null ? 0 : nutritionInfo[3].amount}mg`,
    //     protein: `${nutritionInfo[2] == null ? 0 : nutritionInfo[2].amount}g`,
    //     caffeine: `${nutritionInfo[5] == null ? 0 : nutritionInfo[5].amount}mg`,
    //   },
    // };
    const data = await prisma.products.findUnique({
      where: {
        id: +id,
      },
      select: {
        id: true,
        koreanName: true,
        englishName: true,
        ProductDescriptions: {
          select: {
            description: true,
          },
        },
        Images: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    const allergens = await prisma.productAllergies.findMany({
      where: {
        productId: +id,
      },
      include: {
        Allergies: {
          select: {
            name: true,
          },
        },
      },
    });

    const nutritionInfo = await prisma.nutritions.findMany({
      where: {
        productId: +id,
      },
      select: {
        name: true,
        amount: true,
      },
    });

    data["allergens"] = allergens;
    data["nutritionInfo"] = {};
    nutritionInfo.forEach(
      (nutrition) => (data["nutritionInfo"][nutrition.name] = nutrition.amount)
    );

    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
