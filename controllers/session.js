import bcrypt from "bcrypt";

import { createToken } from "../util.js";
import models from "../models/index.js";

const User = models.User;

const logIn = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      bcrypt.compare(password, user.password, (err, validPassword) => {
        if (err) res.status(400).json({ err, msg: "Something's wrong!" });

        if (validPassword) {
          return res.status(200).json({ user, token: createToken(user) });
        } else {
          return res.status(401).json({ msg: "Invalid credentials" });
        }
      });
    })
    .catch((err) => res.status(401).json({ err, msg: "Invalid credentials" }));
};

const logOut = (req, res) => {
  res.status(200).json({ msg: "Logged out" });
};

export { logIn, logOut };
