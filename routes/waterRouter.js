import express from "express";
import { ctrlWrapper } from "../helpers/index.js";
import { auth, validateBody, validateId } from "../middleware/index.js";
import {
  addDrink,
  changeDailyNorm,
  createdWaterController,
  deleteDrink,
  getMonthData,
  updateDrink,
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

waterRouter.post(
  "/drink",
  auth,
  validateBody(drinkSchema),
  ctrlWrapper(addDrink)
);
waterRouter.patch(
  "/drink/:id",
  validateBody(drinkSchema),
  ctrlWrapper(updateDrink)
);
// waterRouter.put("/drink/:id");
waterRouter.patch("/drink/:id", auth, validateId, ctrlWrapper(deleteDrink));

waterRouter.post(
  "/month",
  validateBody(monthSchema),
  ctrlWrapper(getMonthData)
);

export default waterRouter;
