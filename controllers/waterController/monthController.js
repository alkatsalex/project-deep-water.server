import WaterTracking from "../../models/waterModel.js";
import User from "../../models/userModel.js";

const getMonthData = async (req, res) => {
  //   const { _id: owner } = req.user;
  const { id } = res.user;
  //   const { daily_limit } = await  WaterTracking.findById(id);

  const { date } = req.body;

  const result = await WaterTracking.find({
    owner: id,
    date: { $regex: date },
  });
  res.status(200).send(result);
};

export default getMonthData;
