import Joi from "joi";

export const idSchema = Joi.object({
  drink_id: Joi.string().length(36),
});

export const drinkSchema = Joi.object({
  time: Joi.string(),
  amount: Joi.number(),
});
