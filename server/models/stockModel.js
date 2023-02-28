const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("mongoose-type-url");

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
      type: String,
      required: [true, "add a product image!"],
    },
  },
  {
    timestamps: true,
  }
);

const Stocks = mongoose.model("stock", stocksSchema);
module.exports = Stocks;
