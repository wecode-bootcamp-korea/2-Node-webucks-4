import dao from '../models';

const { productDao, categoryDao } = dao;

const GroupingCategory = async (products, categories) => {
  try {
    const newList = categories.map(category => {
      const { name, id } = category;
      const product = products.filter(el => el.category == category.name);
      let totalList = {
        id: id,
        category: name,
        count: product.length,
        product,
      };
      return totalList;
    });
    return newList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const findAllProducts = async () => {
  const products = await productDao.findAllProducts();
  const categories = await categoryDao.findAllCategories();
  if (!products || !categories) {
    const err = new Error('DRINKS_NOT_FOUND');
    err.statusCode = 404;
    throw err;
  }
  return await GroupingCategory(products, categories);
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
