import prisma from "../models/Model";
import createService from "../services/createService";

const createController = async (req, res) => {
  const createdData = await createService(req);

  res.json(createdData);
};

module.exports = createController;
