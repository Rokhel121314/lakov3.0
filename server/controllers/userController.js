const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createToken } = require("../jwt/jtw");

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

// USER LOG IN
const userLogin = async (req, res) => {
  const { user_name, user_password } = req.body;

  const user = await User.findOne({ user_name: user_name }).exec();
  if (!user) res.status(400).json({ error: "USER DOES NOT EXIST" });
  else {
    const hash = user.user_password;
    bcrypt.compare(user_password, hash).then((match) => {
      if (!match) {
        res.status(400).json({ error: "WRONG PASSWORD!" });
      } else {
        const accessToken = createToken(user);
        res.cookie("access-token", accessToken, {
          expiresIn: 60 * 60 * 24 * 1000,
          httpOnly: true,
        });
      }
      res.json("LOGGGED IN SUCCESSFULLY");
    });
  }
};

//CHECKING USER IF AUTHENTICATED
const isAuthenticated = (req, res) => {
  try {
    res.json("USER IS AUTHENTICATED");
  } catch (error) {
    res.json("USER IS NOT AUTHENTICATED");
  }
};

module.exports = { registerUser, userLogin, isAuthenticated };
