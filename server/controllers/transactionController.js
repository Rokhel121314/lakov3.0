const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");
const Stocks = require("../models/stockModel");

// CREATE TRANSACTION
const createTransaction = async (req, res) => {
  try {
    const { user_id } = req.params;
    const {
      transaction_sold_quantity: transaction_sold_quantity,
      transaction_sold_amount: transaction_sold_amount,
      transaction_cost_amount: transaction_cost_amount,
      transaction_profit_amount: transaction_profit_amount,
      transaction_payment_amount: transaction_payment_amount,
      transaction_payment_change: transaction_payment_change,
      transaction_sold_items: transaction_sold_items,
    } = req.body;
    User.findById(user_id).then(async (user) => {
      const transaction = await Transaction.create({
        transaction_sold_quantity: transaction_sold_quantity,
        transaction_sold_amount: transaction_sold_amount,
        transaction_cost_amount: transaction_cost_amount,
        transaction_profit_amount: transaction_profit_amount,
        transaction_payment_amount: transaction_payment_amount,
        transaction_payment_change: transaction_payment_change,
        transaction_sold_items: transaction_sold_items,
        created_by: {
          user_id: user._id,
          user_name: user.user_name,
          store_name: user.store_name,
        },
      });
      res.status(200).json(transaction);
      console.log("transaction added", transaction._id);
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error", error);
  }
};

// READ ALL TRANSACTIONS
const readAllTransactions = async (req, res) => {
  const { user_id } = req.params;
  try {
    const transactions = await Transaction.find({
      "created_by.user_id": user_id,
    });
    res.status(200).json(transactions);
    console.log("reading all transactions");
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error", error);
  }
};

module.exports = { createTransaction, readAllTransactions };
