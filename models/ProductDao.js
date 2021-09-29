import prisma from "../prisma";

const getProduct = async id => {
  const [product] = await prisma.$queryRaw`
    SELECT
      p.id,
      p.korean_name,
      p.english_name,
      p.description,
      p.category_id,
      c.name AS category,
      i.image_url,
      n.kcal,
      n.fat,
      n.protein,
      n.sodium,
      n.sugar,
      n.caffeine
    FROM
      products p
    JOIN
      categories c
    ON
      p.category_id = c.id
    JOIN
      images i
    ON
      p.id = i.product_id
    JOIN
      nutritions n
    ON
      p.id = n.product_id
    WHERE
      p.id = ${id};
  `; // need to add allergens later

  return product;
};

const getCategories = async () => {
  return await prisma.$queryRaw`
    SELECT
      c.id,
      c.name
    FROM
      categories c;
  `;
};

const getAllProducts = async () => {
  return await prisma.$queryRaw`
    SELECT
      p.id,
      p.korean_name,
      p.english_name,
      c.name AS category,
      p.category_id,
      i.image_url
    FROM
      products p
    JOIN
      images i
    ON
      p.id = i.product_id
    JOIN
      categories c
    ON
      p.category_id = c.id
    ORDER BY
      c.id;
  `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.
};

const createProduct = async (
  koreanName,
  englishName,
  description,
  categoryId
) => {
  await prisma.$queryRaw`
    INSERT INTO
      products (korean_name, english_name, description, category_id)
    VALUES
      (${koreanName}, ${englishName}, ${description}, ${categoryId});
  `;

  const [createdProduct] = await prisma.$queryRaw`
    SELECT
      p.id,
      p.category_id,
      p.korean_name,
      p.english_name,
      p.description
    FROM
      products p
    ORDER BY
      id DESC
    LIMIT
      1;
  `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

  return createdProduct;
};

export default { getProduct, getCategories, getAllProducts, createProduct };
