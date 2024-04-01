import WaterTracking from '../../models/waterModel.js';

const changeDailyNorm = async (req, res) => {
  const userId = req.params.id;
  const { daily_limit } = req.body;

  await WaterTracking.findByIdAndUpdate(userId, { daily_limit }, { new: true });

  res.status(201).send({ message: 'Daily norma changed' });
};
export default changeDailyNorm;
