import { productService } from '../services';

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json({
    myProducts: products,
  });
};

export default { getAllProducts };
