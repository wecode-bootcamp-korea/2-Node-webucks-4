import { CommonError, ProductError } from "../errors";
import { ProductDAO } from "../models";
import { wrapperUtils } from "../utils";

const getAllProducts = async () => {
  const productList = await ProductDAO.getAllProducts();
  if (productList.length === 0) {
    throw new CommonError.NotFoundError();
  }
  return productList;
};

const getProduct = async (productId) => {
  const product = await ProductDAO.getProduct(productId);
  if (!product) {
    throw new CommonError.NotFoundError();
  }
  return product;
};

const flagProductLike = async (userId, productId) => {
  const likeData = await getProductLikeData(userId, productId);
  const { is_deleted: flag } = likeData == null ? { is_deleted: 2 } : likeData;
  switch (flag) {
    case 2:
      wrapperUtils.recordWrapper(
        await ProductDAO.createProductLike(userId, productId),
        new ProductError.LikeFlagError(),
        1
      );
      break;
    case 1:
      wrapperUtils.recordWrapper(
        await ProductDAO.updateProductLike(userId, productId),
        new ProductError.LikeFlagError(),
        1
      );
      break;
    case 0:
      wrapperUtils.recordWrapper(
        await ProductDAO.deleteProductLike(userId, productId),
        new ProductError.LikeFlagError(),
        1
      );
      break;
    default:
      throw new ProductError.LikeFlagError();
  }
};

const getProductLikeData = async (userId, productId) => {
  const likeData = await ProductDAO.getProductLikeData(userId, productId);
  if (!likeData) {
    throw new ProductError.InvalidProductError();
  }
};

export { getAllProducts, getProduct, flagProductLike };
