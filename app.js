// НІЧОГО НЕ ЗМІНЮВАТИ
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./db.js";

import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const qwe = Date.now();

const water = {
  id: "wqeqweqwe",
  owner: "qweqweqweqweqwe",
  amount_consumed: [
    {
      time: "7:00",
      amount: 300,
    },
    {
      time: "8:00",
      amount: 300,
    },
    {
      time: "9:00",
      amount: 300,
    },
    {
      time: "10:00",
      amount: 300,
    },
  ],
  limit: 1500,
  persent: 0,
  data: qwe,
};

console.log(water);

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});

export default app;
