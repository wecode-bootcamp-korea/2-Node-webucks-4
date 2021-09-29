import dao from '../models';

const { productDao } = dao;

const findAllProducts = async () => {
  const products = productDao.findAllProducts();
  if (!products.length) {
    const err = new Error('DRINKS_NOT_FOUND');
    err.statusCode = 404;
    throw err;
  }
  return products;
};

const assignObj = async (product, nutrition) => {
  try {
    const nutritionGroup = { nutrition: nutrition };
    const productObj = [Object.assign(product, nutritionGroup)];
    return productObj;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const findProduct = async id => {
  const [product] = await productDao.findProduct(id);
  const [nutrition] = await productDao.findNutrition(id);
  if (!product || !nutrition) {
    const err = new Error('DRINKS_NOT_FOUND');
    err.statusCode = 404;
    throw err;
  }
  return await assignObj(product, nutrition);
};

export default { findProduct, findAllProducts };
