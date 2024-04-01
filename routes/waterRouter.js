import express from 'express';
import { ctrlWrapper } from '../helpers/index.js';
import changeDailyNorm from '../controllers/waterController/dailyNormaController.js';

const waterRouter = express.Router();

waterRouter.patch('/daily_limit/:id', ctrlWrapper(changeDailyNorm));

export default waterRouter;
