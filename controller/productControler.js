import { productService } from '../service';

const getProductDetail = async (req, res) => {
  const { id } = req.params;
  const detailData = await productService.getProductDetail(id);
  res.status(200).json(detailData);
};

export default { getProductDetail };
