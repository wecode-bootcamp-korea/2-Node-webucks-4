import { productDao } from '../models';

const getAllProducts = async () => {
  return await productDao.getAllProducts();
};

export default { getAllProducts };
