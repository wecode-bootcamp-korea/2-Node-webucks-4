import { ListDAO } from "../models";

const getAllCategories = async () => {
  return await ListDAO.getAllCategories();
};

export { getAllCategories };
