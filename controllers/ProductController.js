import { ProductService } from "../services";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await ProductService.getProduct(productId);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export { getAllProducts, getProduct };
