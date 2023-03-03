const express = require("express");
const User = require("../models/userModel");
const {
  registerUser,
  userLogin,
  userLogout,
  isAuthenticated,
} = require("../controllers/userController");
const { validateToken } = require("../jwt/jwt");

const router = express.Router();

// REGISTER USER
router.post("/users", registerUser);

// USER LOG IN
router.post("/users/login", userLogin);

// USER LOG OUT
router.get("/users/logout", userLogout);

// CHECK USER IF AUTHENTICATED
router.get("/users/profile", validateToken, isAuthenticated);

module.exports = router;
