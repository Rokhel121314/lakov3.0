const express = require("express");
const User = require("../models/userModel");
const {
  registerUser,
  userLogin,
  isAuthenticated,
} = require("../controllers/userController");
const { validateToken } = require("../jwt/jtw");

const router = express.Router();

// REGISTER USER
router.post("/users", registerUser);

// USER LOG IN
router.post("/users/login", userLogin);

// CHECK USER IF AUTHENTICATED
router.get("/users/profile", validateToken, isAuthenticated);

module.exports = router;
