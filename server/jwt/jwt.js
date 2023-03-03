const { sign, verify } = require("jsonwebtoken");
const { validate } = require("../models/userModel");

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
// MIDDLE WARES
app.use(cookieParser());

const SECRET = process.env.SECRETE_JWT;

const createToken = (user) => {
  const accessToken = sign(
    {
      user_name: user.user_name,
      id: user._id,
    },
    SECRET
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken) {
    return res.status(400).json({ error: "USER NOT AUTHENTICATED" });
  } else {
    try {
      const validToken = verify(accessToken, SECRET);
      if (validToken) {
        req.authenticated = true;
        return next();
      }
    } catch (error) {
      return res.status(401).json({ msg: "INVALID TOKEN" });
    }
  }
};

module.exports = { createToken, validateToken };
