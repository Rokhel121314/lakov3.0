const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
