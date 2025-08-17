const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Driver = require("../models/Driver");

const router = express.Router();

// Register Driver
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, contactNumber, gender, address } = req.body;

    const userExists = await Driver.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const driver = await Driver.create({
      name, email, password: hashedPassword, contactNumber, gender, address,
    });

    res.status(201).json({ message: "Driver registered", driver });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Driver
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const driver = await Driver.findOne({ email });
    if (!driver) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: driver._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", token, driver });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
