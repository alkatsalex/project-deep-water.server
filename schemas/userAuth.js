// НІЧОГО НЕ ЗМІНЮВАТИ

import Joi from "joi";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const userAuth = Joi.object({
  password: Joi.string().min(8).max(64).required().messages({
    "string.min": "Minimum password length of 8 characters",
    "string.max": "Maximum password length of 64 characters",
    "string.empty": "Password cannot be empty",
    "any.required": "Missing password field",
  }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Invalid email format",
    "any.required": "Missing email field",
  }),
});
