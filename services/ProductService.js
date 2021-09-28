import { CommonError } from "../errors";
import { ProductDAO } from "../models";

const getAllProducts = async () => {
  const productList = await ProductDAO.getAllProducts();
  if (productList == null) {
    throw new CommonError.ItemNotFoundError();
  }
  return productList;
};

const getProduct = async (productId) => {
  const product = await ProductDAO.getProduct(productId);
  if (product == null) {
    throw new CommonError.ItemNotFoundError();
  }
  return product;
};

export { getAllProducts, getProduct };
