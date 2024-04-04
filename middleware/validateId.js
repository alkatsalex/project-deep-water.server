import { HttpError } from "../helpers/index.js";
import { idSchema } from "../schemas/waterSchema.js";

const validateId = (req, res, next) => {
  const { id } = req.params;
  const data = { id };
  const { error } = idSchema.validate(data);

  if (error) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

export default validateId;
