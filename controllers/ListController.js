import { ListService } from "../services";

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await ListService.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export { getAllCategories };
