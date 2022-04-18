import { getToken } from "../util.js";

import User from "../models/user.js";

const getRoot = (_req, res) => {
  User.findByPk(1)
    .then((user) =>
      res.status(200).json({
        message: "Welcome to my API! 🚀",
        bearerToken: getToken(user),
      })
    )
    .catch((err) => res.status(400).json({ err }));
};

export { getRoot };
