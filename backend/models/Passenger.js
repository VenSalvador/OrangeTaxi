import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
}, { timestamps: true });

const Passenger = mongoose.model("Passenger", passengerSchema);

export default Passenger;
