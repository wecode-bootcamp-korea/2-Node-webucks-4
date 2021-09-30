import dao from '../models';

const { categoryDao } = dao;

const findAllCategories = async () => {
  const categories = await categoryDao.findAllCategories();
  if (!categories) {
    const err = new Error('DRINKS_NOT_FOUND');
    err.statusCode = 404;
    throw err;
  }
  return categories;
};

export default { findAllCategories };
