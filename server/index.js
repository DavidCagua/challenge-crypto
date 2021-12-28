import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import coinRoutes from "./routes/coin.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/coins", coinRoutes);

const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
