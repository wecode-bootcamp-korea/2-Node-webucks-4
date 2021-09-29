import service from '../services';

const { productService } = service;

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const findProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.findProduct(id);
    resMessage(201, res, 'CREATED', product);
  } catch (err) {
    next(err);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const product = await productService.findAllProducts();
    resMessage(201, res, 'CREATED', product);
  } catch (err) {
    next(err);
  }
};

export default { findProduct, findAllProducts };
