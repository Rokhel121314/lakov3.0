const mongoose = require("mongoose");
const User = require("./userModel");
mongoose.set("strictQuery", false);

const stocksSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "add a product name!"],
    },
    product_quantity: {
      type: Number,
      required: [true, "add a product quantity!"],
    },
    original_price: {
      type: Number,
      required: [true, "add a product original price!"],
    },
    selling_price: {
      type: Number,
      required: [true, "add a product selling price!"],
    },
    product_type: {
      type: String,
      required: [true, "add a product type!"],
    },
    product_image: {
      type: Object,
      required: [true, "add a product image!"],
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

const Stocks = mongoose.model("stock", stocksSchema);
module.exports = Stocks;
