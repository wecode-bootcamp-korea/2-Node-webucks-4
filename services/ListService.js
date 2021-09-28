import { CommonError } from "../errors";
import { ListDAO } from "../models";

const getAllCategories = async () => {
  const categories = await ListDAO.getAllCategories();
  if (categories == null) {
    throw new CommonError.ItemNotFoundError();
  }
  return categories;
};

export { getAllCategories };
