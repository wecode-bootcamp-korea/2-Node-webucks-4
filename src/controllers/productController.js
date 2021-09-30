import { productService } from '../services';

const getProducts = async (req, res) => {
  console.log('here is controller');
  const products = await productService.getProducts();
  res.status(200).json({
    myProducts: products,
  });
};

module.exports = { getProducts };
