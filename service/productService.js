import { productDAO } from '../model';

const getProductDetail = async id => {
  const detailData = await productDAO.getProductDetail(id);
  if (detailData.length > 1)
    for (let i = 1; i < detailData.length; i++)
      detailData[0].allergy += ', ' + detailData[i].allergy;
  detailData.splice(1);
  return detailData;
};

export default { getProductDetail };
