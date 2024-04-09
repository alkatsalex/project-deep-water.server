import WaterTracking from "../../models/waterModel.js";
import HttpError from "../../helpers/HttpError.js";

const getMonthData = async (req, res) => {
  const { id } = res.user;
  const { date } = req.body;

  const result = await WaterTracking.find({
    owner: id,
    date: { $regex: date },
  });
  res.status(200).send(result);
};

export default getMonthData;
