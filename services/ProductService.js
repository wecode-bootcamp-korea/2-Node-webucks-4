import { ProductDao } from "../models";

const getProduct = async id => {
  return await ProductDao.getProduct(id);
};

const getCategories = async () => {
  return await ProductDao.getCategories();
};

const getAllProducts = async () => {
  return await ProductDao.getAllProducts();
};

const createProduct = async (
  koreanName,
  englishName,
  description,
  categoryId
) => {
  return await ProductDao.createProduct(
    koreanName,
    englishName,
    description,
    categoryId
  );
};

export default { getProduct, getCategories, getAllProducts, createProduct };
