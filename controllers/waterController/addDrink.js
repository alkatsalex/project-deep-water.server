import { HttpError } from "../../helpers/index.js";
import WaterTracking from "../../models/waterModel.js";

const addDrink = async (req, res) => {
  const { id: owner } = res.user;
  const { time, amount, date } = req.body;

  const findDrink = await WaterTracking.findOne({ owner, date });

  const newDrink = [...findDrink.water_entries];

  const drink = newDrink.find((option) => option.time === time);

  if (drink) {
    throw HttpError(409, "Time in use");
  }

  newDrink.push({ time, amount });

  const newDrinkBD = await WaterTracking.findOneAndUpdate(
    { _id: findDrink._id },
    { water_entries: newDrink },
    { new: true }
  );

  res.status(201).send(newDrinkBD);
};

export default addDrink;
