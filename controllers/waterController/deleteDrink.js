import { HttpError } from "../../helpers/index.js";
import WaterTracking from "../../models/waterModel.js";

const deleteDrink = async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;
  const { id: owner } = res.user;

  const findDrink = await WaterTracking.findOne({ owner, date });

  const newDrink = findDrink.water_entries.filter((entry) => entry.id !== id);

  const result = await WaterTracking.findOneAndUpdate(
    { _id: findDrink._id },
    { water_entries: newDrink },
    { new: true }
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

export default deleteDrink;
