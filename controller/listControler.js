import { listService } from '../service';

const getListData = async (req, res) => {
  const listData = await listService.getListData();
  res.status(200).json(listData);
};

export default { getListData };
