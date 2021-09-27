import { listDAO } from '../model';

const listDataService = async req => {
  const listData = await listDAO.listDataDAO(req);
  return listData;
};

export { listDataService };
