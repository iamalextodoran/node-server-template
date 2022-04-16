const User = require("../models").User;

const bcrypt = require("bcrypt");

const { getToken, isAuth } = require("../util");

module.exports = {
  register: (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    User.create({ firstName, lastName, email, password })
      .then((user) =>
        res.status(201).json({ user: user, token: getToken(user) })
      )
      .catch((err) => res.status(400).json({ err }));
  },

  logIn: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((user) => {
        bcrypt.compare(password, user.password, (err, validPassword) => {
          if (err) throw err;

          if (validPassword) {
            return res.status(200).json({ user, token: getToken(user) });
          } else {
            return res.status(401).json({ msg: "Invalid credentials" });
          }
        });
      })
      .catch((err) => res.status(400).json({ err }));
  },

  logOut: (req, res) => {
    const next = () => res.status(200).json({ msg: "Logged out" });

    isAuth(req, res, next);
  },
};
