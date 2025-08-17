import express from "express";
import { registerPassenger,registerDriver, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/registerPassenger", registerPassenger);
router.post("/registerDriver", registerDriver);
router.post("/login", login);

export default router;
