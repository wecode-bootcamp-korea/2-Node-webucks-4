import { listDAO } from '../model';

const getListData = async () => {
  return await listDAO.getListData();
};

export default { getListData };
