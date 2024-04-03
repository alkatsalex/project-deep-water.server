import express from 'express';
import { ctrlWrapper } from '../helpers/index.js';
import changeDailyNorm from '../controllers/waterController/dailyNormaController.js';
import createdWaterController from '../controllers/waterController/createdWaterController.js';

const waterRouter = express.Router();

waterRouter.patch('/daily_limit', ctrlWrapper(changeDailyNorm));
waterRouter.post('/created', ctrlWrapper(createdWaterController));

export default waterRouter;
