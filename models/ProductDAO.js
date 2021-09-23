import prisma from "../prisma";

const getAllProducts = async () => {
  // return await prisma.$queryRaw`SELECT p.id, p.korean_name, p.english_name, c.name, p.category_id, i.image_url
  //   FROM products AS p
  //   LEFT JOIN categories AS c
  //   ON p.category_id = c.id
  //   LEFT JOIN images AS i
  //   ON p.id = i.product_id;`;
  return await prisma.product.findMany({
    include: {
      Category: {
        select: {
          category: true,
        },
      },
      Image: {
        select: {
          imageUrl: true,
        },
      },
    },
  });
};

const getProduct = async (productId) => {
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
  const data = await prisma.product.findUnique({
    where: {
      id: +productId,
    },
    select: {
      id: true,
      koreanName: true,
      englishName: true,
      ProductDescription: {
        select: {
          description: true,
        },
      },
      Image: {
        select: {
          imageUrl: true,
        },
      },
    },
  });

  const allergens = await prisma.productAllergy.findMany({
    where: {
      productId: +productId,
    },
    include: {
      Allergy: {
        select: {
          name: true,
        },
      },
    },
  });

  const nutritionInfo = await prisma.nutrition.findMany({
    where: {
      productId: +productId,
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
  return data;
};

export { getAllProducts, getProduct };
