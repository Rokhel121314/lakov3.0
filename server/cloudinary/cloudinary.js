const dotenv = require("dotenv").config();
const cloudinaryModule = require("cloudinary");

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
