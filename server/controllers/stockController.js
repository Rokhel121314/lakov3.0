const Stocks = require("../models/stockModel");
const User = require("../models/userModel");
const cloudinary = require("../cloudinary/cloudinary");

// ADDING/CREATING PRODUCT TO DATABASE

const createProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_quantity,
      original_price,
      selling_price,
      product_type,
      product_image,
    } = req.body;
    const { user_id } = req.params;
    if (product_image) {
      const image = await cloudinary.uploader.upload(product_image, {
        upload_preset: "lako",
      });
      if (image) {
        User.findById(user_id).then(async (user) => {
          const product = await Stocks.create({
            product_name: product_name,
            product_quantity: product_quantity,
            original_price: original_price,
            selling_price: selling_price,
            product_type: product_type,
            product_image: image,
            created_by: {
              user_id: user._id,
              user_name: user.user_name,
              store_name: user.store_name,
            },
          });
          res.status(200).json(product);
          console.log("product added", product);
        });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("erorr", error);
  }
};

// GETTING ALL PRODUCT FROM DATABASE
const readAllProduct = async (req, res) => {
  try {
    const { user_id } = req.params;
    const product = await Stocks.find({ "created_by.user_id": user_id });
    res.status(200).json(product);
    console.log("product", product);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GETTING PRODUCT BY ID FROM DATABASE
const readProductById = async (req, res) => {
  try {
    const { user_id, product_id } = req.params;
    const product = await Stocks.findOne({
      "created_by.user_id": user_id,
      _id: product_id,
    });
    if (!product) {
      return res
        .status(400)
        .json(`PRODUCT WITH ID ${product_id} DOES NOT EXIST`);
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
    const { user_id, product_id } = req.params;
    const product = await Stocks.findOneAndUpdate(
      { "created_by.user_id": user_id, _id: product_id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!product) {
      return res.status(404).json(`No product with id: ${product_id}`);
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
    const { user_id, product_id } = req.params;
    const product = await Stocks.findOneAndRemove({
      "created_by.user_id": user_id,
      _id: product_id,
    });
    if (!product) {
      return res.status(404).json(`No product with id: ${product_id}`);
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
