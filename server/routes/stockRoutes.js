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
router.post("/products", createProduct);

// READING ALL PRODUCT FROM DATABASE
router.get("/products", readAllProduct);

// READING PRODUCT BY ID
router.get("/products/:id", readProductById);

// UPDATING PRODUCT
router.put("/products/:id", updateProduct);

// DELETE PRODUCT
router.delete("/products/:id", deleteProduct);

module.exports = router;
