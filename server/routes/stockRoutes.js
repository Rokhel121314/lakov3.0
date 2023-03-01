const express = require("express");

const {
  createProduct,
  readAllProduct,
  readProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/stockController");
const Stock = require("../models/stockModel");

const router = express.Router();

// ADDING/CREATING PRODUCT
router.post("/products/:user_id", createProduct);

// READING ALL PRODUCT FROM DATABASE
router.get("/products/:user_id", readAllProduct);

// READING PRODUCT BY ID
router.get("/products/:user_id/:product_id", readProductById);

// UPDATING PRODUCT
router.put("/products/:user_id/:product_id", updateProduct);

// DELETE PRODUCT
router.delete("/products/:user_id/:product_id", deleteProduct);

module.exports = router;
