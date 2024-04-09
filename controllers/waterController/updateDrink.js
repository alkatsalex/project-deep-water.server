import { HttpError } from "../../helpers/index.js";
import WaterTracking from "../../models/waterModel.js";

const updateDrink = async (req, res) => {
  const { id: owner } = res.user;
  const { time, amount, date } = req.body;
  const { id } = req.params;

  if (!time && !amount) {
    throw HttpError(400, "Body must have at least one field");
  }

  const findDay = await WaterTracking.findOne({ owner, date });
  const arr = findDay.water_entries;

  const index = arr.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return null;
  }
  const findTime = arr.find((option) => option.time === time);

  if (findTime) {
    throw HttpError(409, "Time in use");
  }

  const updatedDrink = { time, amount, _id: id };

  arr[index] = updatedDrink;

  const result = await WaterTracking.findOneAndUpdate(
    { owner, date },
    { water_entries: arr }
  );
  res.status(200).send(result);
};

export default updateDrink;
