const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// imports for user
const User = require("./models/userModel");
const userRoutes = require("./routes/userRoutes");

// imports for stock
const Stock = require("./models/stockModel");
const stockRoutes = require("./routes/stockRoutes");

const app = express();

// MIDDLE WARES
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
app.use(stockRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server is running in PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("test12345");
});
