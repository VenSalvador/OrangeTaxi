import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Passenger from "../models/Passenger.js";
import Driver from "../models/Driver.js";

// JWT Secret (make sure this is in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ================= Passenger Register =================
export const registerPassenger = async (req, res) => {
  try {
    const { name, email, password, contactNumber } = req.body;

    // Check if passenger already exists
    const existing = await Passenger.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create passenger
    const passenger = new Passenger({
      name,
      email,
      password: hashedPassword,
      contactNumber,
    });

    await passenger.save();
    res.status(201).json({ message: "Passenger registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= Driver Register =================
export const registerDriver = async (req, res) => {
  try {
    const { name, email, password, contactNumber, gender, address } = req.body;

    // Check if driver already exists
    const existing = await Driver.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create driver
    const driver = new Driver({
      name,
      email,
      password: hashedPassword,
      contactNumber,
      gender,
      address,
    });

    await driver.save();
    res.status(201).json({ message: "Driver registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= Login (Passenger or Driver) =================
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // First check Passenger table
    let user = await Passenger.findOne({ email });
    let role = "passenger";

    if (!user) {
      // If not a passenger, check Driver table
      user = await Driver.findOne({ email });
      role = "driver";
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      role,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        contactNumber: user.contactNumber,
        role
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
