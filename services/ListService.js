import { CommonError } from "../errors";
import { ListDAO } from "../models";

const getAllCategories = async () => {
  const categories = await ListDAO.getAllCategories();
  if (categories.length === 0) {
    throw new CommonError.NotFoundError();
  }
  return categories;
};

export { getAllCategories };
