import service from '../services';

const { productService } = service;

const resMessage = (res, message, data) => {
  res.status(201).json({
    name: 'Sucess',
    message,
    data,
  });
};

const findProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.findProduct(id);
    resMessage(res, 'product-page 데이터', product);
  } catch (err) {
    next(err);
  }
};

const findAllProducts = async (req, res, next) => {
  try {
    const product = await productService.findAllProducts();
    resMessage(res, 'list-page 데이터', product);
  } catch (err) {
    next(err);
  }
};

export default { findProduct, findAllProducts };
