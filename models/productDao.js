import prisma from '../prisma';

const findProduct = async id => {
  const product = await prisma.$queryRaw`
  SELECT 
    p.id, 
    c.name as category, 
    p.korean_name as koreanName,
    p.english_name as englishName, 
    i.image_url as imageUrl, 
    d.content
  FROM
    products p 
  JOIN categories c ON p.category_id = c.id
  JOIN images i ON p.id = i.product_id
  JOIN description d ON p.id = d.product_id
  WHERE
    p.id=${id};
  `;
  return product;
};

const findNutrition = async id => {
  const nutrition = await prisma.$queryRaw`
  SELECT 
    Concat(s.name,' / ', s.ml,'ml (', s.floz,' fl oz)') as servingSize,
    n.caffeine, 
    n.fat, 
    n.kcal,
    n.natrium,
    n.protein, 
    n.sugar,
    a.name as triggers
  FROM
    products p 
  JOIN nutritions n ON p.id = n.product_id
  JOIN product_allergies pa ON p.id = pa.product_id
  LEFT OUTER JOIN allergies a ON a.id=pa.allergy_id
  LEFT OUTER JOIN serving_size s ON  n.id = s.nutrition_id
  WHERE
    p.id=${id};
    `;
  return nutrition;
};

const findAllProducts = async () => {
  const products = await prisma.$queryRaw`
    SELECT
      p.id, 
      c.name as category,
      p.korean_name as koreanName,
      i.image_url as imageUrl
    FROM 
      products p 
    JOIN
      categories c ON 
      p.category_id = c.id
    JOIN
      images i ON 
      p.id = i.product_id
  `;
  return products;
};

export default { findProduct, findAllProducts, findNutrition };
