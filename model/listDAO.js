import prisma from './Model';

const listDataDAO = async req => {
  const listData = await prisma.$queryRaw`
  SELECT products.id, products.korean_name, images.image_url
  FROM products
  LEFT JOIN images
  ON products.id = images.product_id;
  `;

  return listData;
};

export { listDataDAO };
