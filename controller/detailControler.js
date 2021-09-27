import { detailService } from '../service';

const detailDataControler = async (req, res) => {
  const detailData = await detailService.detailDataService(req);
  res.json(detailData);
};

export { detailDataControler };
