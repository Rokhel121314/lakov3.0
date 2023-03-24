const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "add a first name"],
    },
    last_name: {
      type: String,
      required: [true, "add a last name"],
    },
    store_name: {
      type: String,
      required: [true, "add a store name"],
    },
    store_logo: {
      type: String,
      required: [false, "add a store logo"],
    },
    user_name: {
      type: String,
      required: [true, "add a user name"],
    },
    user_password: {
      type: String,
      required: [true, "add a password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
