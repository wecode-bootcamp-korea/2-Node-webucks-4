import { detailDAO } from '../model';

const detailDataService = async req => {
  const detailData = await detailDAO.detailDataDAO(req);
  if (detailData.length > 1)
    for (let i = 1; i < detailData.length; i++)
      detailData[0].allergy += ', ' + detailData[i].allergy;
  detailData.splice(1);
  return detailData;
};

export { detailDataService };
