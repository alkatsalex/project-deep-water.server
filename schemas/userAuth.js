// НІЧОГО НЕ ЗМІНЮВАТИ

import Joi from "joi";

export const userAuth = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
