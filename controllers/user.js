import models from "../models/index.js";
import { isAuth } from "../util.js";
import { userSerializer } from "../serializers/index.js";

const User = models.User;

const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  User.create({ firstName, lastName, email })
    .then((user) => res.status(201).json(userSerializer(user)))
    .catch((err) => res.status(400).json({ err }));
};

const updateUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  const next = () =>
    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        if (!user) return res.status(206).json({});

        user
          .update({ firstName, lastName, email })
          .then((user) => res.status(202).json(userSerializer(user)));
      })
      .catch((error) => res.status(400).json({ error: error }));

  isAuth(req, res, next);
};

const getUsers = (req, res) => {
  const next = () =>
    User.findAll()
      .then((users) => res.status(200).json(userSerializer(users)))
      .catch((err) => res.status(400).json({ err }));

  isAuth(req, res, next);
};

const getUser = (req, res) => {
  const next = () =>
    User.findByPk(req.params.id)
      .then((user) => res.status(200).json(userSerializer(user)))
      .catch((err) => res.status(400).json({ err }));

  isAuth(req, res, next);
};

const deleteUser = (req, res) => {
  const next = () =>
    User.destroy({ where: { id: req.params.id } })
      .then((user) => res.status(200).json(userSerializer(user)))
      .catch((err) => res.status(400).json({ err }));

  isAuth(req, res, next);
};

const deleteUsers = (req, res) => {
  const next = () =>
    User.destroy({ truncate: true })
      .then((users) => res.status(200).json(userSerializer(users)))
      .catch((err) => res.status(400).json({ err }));

  isAuth(req, res, next);
};

export { createUser, updateUser, getUser, getUsers, deleteUser, deleteUsers };
