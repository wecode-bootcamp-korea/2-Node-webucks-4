import { productDao } from '../models';

const getProducts = async () => {
  return await productDao.getProducts();
};

module.exports = { getProducts };

// 비밀번호 암호화,
