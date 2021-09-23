import { ProductDAO } from "../models";

const getAllProducts = async () => {
  return await ProductDAO.getAllProducts();
};

const getProduct = async (productId) => {
  return await ProductDAO.getProduct(productId);
};

export { getAllProducts, getProduct };
