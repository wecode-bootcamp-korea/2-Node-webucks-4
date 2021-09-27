import { listService } from '../service';

const listDataControler = async (req, res) => {
  const listData = await listService.listDataService(req);
  res.json(listData);
};

export { listDataControler };
