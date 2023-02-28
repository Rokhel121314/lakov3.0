const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();

// MIDDLE WARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
