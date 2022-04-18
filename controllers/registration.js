import bcrypt from "bcrypt";

import User from "../models/user.js";
import { userSerializer } from "../serializers";

const register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.create({ firstName, lastName, email, password })
    .then((user) => res.status(201).json(userSerializer(user)))
    .catch((err) => res.status(400).json({ err }));
};

const logIn = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      bcrypt.compare(password, user.password, (err, validPassword) => {
        if (err) res.status(400).json({ err });

        if (validPassword) {
          return res.status(200).json(userSerializer(user));
        } else {
          return res.status(401).json({ msg: "Invalid credentials" });
        }
      });
    })
    .catch((err) => res.status(401).json({ msg: "Invalid credentials" }));
};

const logOut = (req, res) => {
  res.status(200).json({ msg: "Logged out" });
};

export { register, logIn, logOut };
