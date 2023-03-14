const express = require("express");
const Transaction = require("../models/transactionModel");
const { validateToken } = require("../jwt/jwt");

const {
  createTransaction,
  readAllTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

// createTransaction
router.post("/transactions/:user_id", validateToken, createTransaction);

// readAllTransactions
router.get("/transactions/:user_id", validateToken, readAllTransactions);

module.exports = router;
