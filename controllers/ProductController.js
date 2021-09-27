import ProductService from "../services/ProductService";

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getProduct(id);

    res.status(201).json({ message: "SUCCESS", data: product });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await ProductService.getCategories();

    res.status(201).json({ message: "SUCCESS", data: categories });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductService.getAllProducts();

    res.status(201).json({ message: "SUCCESS", data: allProducts });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const createdProduct = await ProductService.createProduct(
      "라뗴",
      "Latte",
      "Latte is horse",
      4
    );

    res.status(201).json({ message: "SUCCESS", data: createdProduct });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default { getProduct, getCategories, getAllProducts, createProduct };
