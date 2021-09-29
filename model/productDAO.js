import prisma from './Model';

const getProductDetail = async id => {
  return await prisma.$queryRaw`
  SELECT products.id, categories.name as category_name, products.korean_name, 
  products.english_name, images.image_url, nutritions.name as size, 
  nutritions.amount, allergies.name as allergy
  FROM products

  LEFT JOIN categories
  ON products.category_id = categories.id

  LEFT JOIN images
  ON products.id = images.product_id

  LEFT JOIN nutritions
  ON products.id = nutritions.product_id

  LEFT JOIN products_allergies
  ON products.id = products_allergies.product_id

  LEFT JOIN allergies
  ON products_allergies.allergy_id = allergies.id

  WHERE products.id = ${id};
  `;
};

export default { getProductDetail };
