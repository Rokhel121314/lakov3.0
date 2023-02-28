const Stocks = require("../models/stockModel");

// ADDING/CREATING PRODUCT TO DATABASE

const createProduct = async (req, res) => {
  try {
    const product = await Stocks.create(req.body);
    res.status(200).json(product);
    console.log("product added", product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GETTING ALL PRODUCT FROM DATABASE
const readAllProduct = async (req, res) => {
  try {
    const product = await Stocks.find();
    res.status(200).json(product);
    console.log("products", product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GETTING PRODUCT BY ID FROM DATABASE
const readProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Stocks.findById(id);

    if (!product) {
      return res.status(404).json(`No product with id: ${id}`);
    } else {
      res.status(200).json(product);
      console.log("product", product);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// UPDATE PRODUCT BY ID ON DATABASE
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Stocks.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json(`No product with id: ${id}`);
    } else {
      res.status(200).json(product);
      console.log("updated product", product);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE PRODUCT BY ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Stocks.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json(`No product with id: ${id}`);
    } else {
      res.status(200).json(product);
      console.log("deleted", product);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createProduct,
  readAllProduct,
  readProductById,
  updateProduct,
  deleteProduct,
};
