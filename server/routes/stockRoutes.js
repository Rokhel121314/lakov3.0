const express = require("express");

const {
  createProduct,
  readAllProduct,
  readProductById,
  updateProduct,
  deleteProduct,
  updateStockOnPurchase,
} = require("../controllers/stockController");
const { validateToken } = require("../jwt/jwt");
const Stocks = require("../models/stockModel");

const router = express.Router();

// ADDING/CREATING PRODUCT
router.post("/products/:user_id", validateToken, createProduct);

// READING ALL PRODUCT FROM DATABASE
router.get("/products/:user_id", validateToken, readAllProduct);

// READING PRODUCT BY ID
router.get("/products/:user_id/:product_id", validateToken, readProductById);

// UPDATING PRODUCT
router.put("/products/:user_id/:product_id", validateToken, updateProduct);

// DELETE PRODUCT
router.delete("/products/:user_id/:product_id", validateToken, deleteProduct);

// UPDATE PRODUCT UPON SUCCESSFULL TRANSACTION
router.put("/products/:user_id", validateToken, updateStockOnPurchase);

module.exports = router;
