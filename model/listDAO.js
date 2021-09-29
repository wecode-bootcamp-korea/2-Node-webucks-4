import prisma from './Model';

const getListData = async () => {
  return await prisma.$queryRaw`
  SELECT products.id, products.korean_name, images.image_url
  FROM products
  LEFT JOIN images
  ON products.id = images.product_id;
  `;
};

export default { getListData };
