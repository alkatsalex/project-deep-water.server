import express from "express";
import { ctrlWrapper } from "../helpers/index.js";
import { auth, validateBody } from "../middleware/index.js";
import {
  addDrink,
  changeDailyNorm,
  createdWaterController,
  getMonthData,
} from "../controllers/waterController/index.js";
import {
  drinkSchema,
  dailyNormSchema,
  monthSchema,
} from "../schemas/waterSchema.js";

const waterRouter = express.Router();

waterRouter.patch(
  "/daily_limit",
  validateBody(dailyNormSchema),
  ctrlWrapper(changeDailyNorm)
);
waterRouter.post("/created", ctrlWrapper(createdWaterController));

waterRouter.post("/drink", auth, validateBody(drinkSchema), addDrink);
// waterRouter.put("/drink/:id");
// waterRouter.delete("/drink/:id", auth);

waterRouter.get("/month", validateBody(monthSchema), ctrlWrapper(getMonthData));

export default waterRouter;
