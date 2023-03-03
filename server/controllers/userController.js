const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const express = require("express");
const cookieParser = require("cookie-parser");
const { createToken } = require("../jwt/jwt");

const app = express();
// MIDDLE WARES
app.use(cookieParser());

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, store_name, user_name, user_password } =
      req.body;
    const hash = bcrypt.hashSync(user_password, 10);
    const user = await User.create({
      first_name: first_name,
      last_name: last_name,
      store_name: store_name,
      user_name: user_name,
      user_password: hash,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// // USER LOG IN

const userLogin = async (req, res) => {
  const { user_name, user_password } = req.body;

  try {
    const user = await User.findOne({ user_name: user_name }).exec();
    if (!user) res.status(400).json({ status: "not user" });
    else {
      const hash = user.user_password;
      const match = await bcrypt.compare(user_password, hash);
      if (!match) {
        res.status(400).json({ status: "wrong password" });
      } else {
        const accessToken = createToken(user._id);
        res.cookie("access-token", accessToken, {
          expiresIn: 60 * 60 * 24 * 1000,
          httpOnly: true,
          sameSite: "strict",
        });

        res.json({
          isLoggedIn: true,
          user: {
            user_id: user._id,
            first_name: user.first_name,
            store_name: user.store_name,
          },
        });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// USER LOG OUT FUNCTION
const userLogout = (req, res) => {
  try {
    res.cookie("access-token", "1", {
      expiresIn: 1 * 1 * 1 * 1000,
    });
    res.status(200).json("LOGGED OUT");
  } catch (error) {
    console.log(error);
  }
};

//CHECKING USER IF AUTHENTICATED
const isAuthenticated = (req, res) => {
  try {
    res.json({ isAuth: true });
  } catch (error) {
    res.json({ isAuth: false });
  }
};

module.exports = { registerUser, isAuthenticated, userLogin, userLogout };
