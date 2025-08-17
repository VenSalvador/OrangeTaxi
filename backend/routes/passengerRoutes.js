const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Passenger = require("../models/Passenger");

const router = express.Router();

// Register Passenger
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, contactNumber } = req.body;

    const userExists = await Passenger.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const passenger = await Passenger.create({
      name, email, password: hashedPassword, contactNumber,
    });

    res.status(201).json({ message: "Passenger registered", passenger });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Passenger
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const passenger = await Passenger.findOne({ email });
    if (!passenger) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, passenger.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: passenger._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", token, passenger });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
