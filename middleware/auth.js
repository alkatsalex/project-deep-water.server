import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

export const auth = (req, res, next) => {
  const headerAuth = req.headers.authorization;
  if (typeof headerAuth === "undefined") {
    return res.status(401).send({ message: "Invalid token" });
  }
  const [bearer, token] = headerAuth.split(" ", 2);
  if (bearer !== "Bearer") {
    return res.status(401).send({ message: "Invalid token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({ message: "Expired token" });
      }
      console.error(err);
      return res.status(401).send({ message: "Invalid token" });
    }

    const user = await User.findById(decode.id);

    if (user === null) {
      return res.status(401).send({ message: "Invalid token" });
    }

    if (user.token !== token) {
      return res.status(401).send({ message: "Invalid token" });
    }

    res.user = {
      id: decode.id,
      user,
    };
    next();
  });
};
