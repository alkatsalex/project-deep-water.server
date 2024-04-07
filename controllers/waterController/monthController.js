import WaterTracking from "../../models/waterModel.js";
import HttpError from "../../helpers/HttpError.js";

const getMonthData = async (req, res) => {
  const { id } = res.user;
  const { date } = req.body;
  console.log("date", date);
  console.log(typeof date);

  if (date === null) {
    throw HttpError(400, "The body must contain a date");
  }

  const result = await WaterTracking.find({
    owner: id,
    date: { $regex: date },
  });
  res.status(200).send(result);
};

export default getMonthData;
