import express from "express";
import { getCoins, getHistory } from "../controllers/coin.js";
const router = express.Router();

router.get("/", getCoins);
router.get("/historical/:id", getHistory);

export default router;
