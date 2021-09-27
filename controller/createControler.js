import createService from '../service/createService';

const createControler = async (req, res) => {
  const createdData = await createService(req);

  res.json(createdData);
};

module.exports = createControler;
