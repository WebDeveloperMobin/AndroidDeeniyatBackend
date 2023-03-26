require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Register = require("../models/register");

router.post(`/${process.env.API}/register`, async (req, res) => {
  const data = new Register(req.body);
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);
//   console.log(hashedPassword)
  try {
    await data.save();
    res.status(201).json({
      message: "Data inserted successfully!",
    });
  } catch(error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
