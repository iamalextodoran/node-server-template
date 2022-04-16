const { getToken } = require("../util");

const User = require("../models").User;

module.exports = {
  getRoot: (_req, res) => {
    User.findByPk(1)
      .then((user) =>
        res.status(200).json({
          message: "Welcome to my API! 🚀",
          bearerToken: getToken(user),
        })
      )
      .catch((err) => res.status(400).json({ err }));
  },
};
