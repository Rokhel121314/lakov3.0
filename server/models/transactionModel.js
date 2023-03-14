const mongoose = require("mongoose");
const User = require("./userModel");
mongoose.set("strictQuery", false);

const transactionSchema = mongoose.Schema(
  {
    transaction_sold_quantity: {
      type: Number,
      required: [true],
    },
    transaction_sold_amount: {
      type: Number,
      required: [true],
    },
    transaction_payment_amount: {
      type: Number,
      required: [true],
    },
    transaction_payment_change: {
      type: Number,
      required: [false],
    },
    transaction_sold_items: {
      type: Array,
      required: [true],
    },
    created_by: {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,
      },
      user_name: {
        type: String,
        required: true,
      },
      store_name: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction;
