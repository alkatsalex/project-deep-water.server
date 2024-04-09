import Joi from "joi";

export const idSchema = Joi.object({
  id: Joi.string().length(24).required(),
});

export const drinkSchema = Joi.object({
  date: Joi.string().length(10).required(),
  time: Joi.string().min(4).max(8).required(),
  amount: Joi.number().integer().positive().less(5001).required(),
});

export const dailyNormSchema = Joi.object({
  daily_limit: Joi.number().required(),
  date: Joi.string().required(),
});

export const monthSchema = Joi.object({
  date: Joi.string().required(),
});
