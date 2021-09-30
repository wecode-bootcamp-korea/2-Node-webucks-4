import service from '../services';

const { categoryService } = service;

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const findAllCategories = async (req, res, next) => {
  try {
    const category = await categoryService.findAllCategories();
    resMessage(201, res, 'CREATED', category);
  } catch (err) {
    const { statusCode, message } = err;
    resMessage(statusCode, res, message);
    next(err);
  }
};

export default { findAllCategories };
