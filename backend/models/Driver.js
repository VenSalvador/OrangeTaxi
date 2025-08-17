import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;
