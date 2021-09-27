import dao from '../models';

const { productDao } = dao;

const newProductList = async products => {
  let categoryList = [];
  products.forEach(el => {
    if (categoryList.indexOf(el.category) === -1)
      categoryList.push(el.category);
  });
  const list = categoryList.map((category, id) => {
    const product = products.filter(el => el.category == category);
    let totalList = {
      id: id + 1,
      category,
      count: product.length,
      product,
    };
    return totalList;
  });
  return list;
};

const findAllProducts = async () => {
  const products = await productDao.findAllProducts();
  return await newProductList(products);
};

const findProduct = async id => {
  return await productDao.findProduct(id);
};

export default { findProduct, findAllProducts };
