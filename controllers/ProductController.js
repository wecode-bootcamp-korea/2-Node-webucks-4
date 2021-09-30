import { CommonError } from "../errors";
import { ProductService } from "../services";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json({ products: products });
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      throw new CommonError.RequestKeyError();
    }
    const product = await ProductService.getProduct(productId);
    res.status(200).json({ product: product });
  } catch (err) {
    next(err);
  }
};

const flagProductLike = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const { foundUserInfo } = req;
    if (!productId || !foundUserInfo) {
      throw new CommonError.RequestKeyError();
    }
    const { id: userId } = foundUserInfo;
    await ProductService.flagProductLike(userId, productId);
    res.status(201).json({ message: "FLAG_PRODUCT_LIKE_SUCCESS" });
  } catch (err) {
    next(err);
  }
};

export { getAllProducts, getProduct, flagProductLike };
