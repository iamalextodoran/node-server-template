const User = require("../models").User;

const { getToken, isAuth } = require("../util");

module.exports = {
  createUser: (req, res) => {
    const { firstName, lastName, email } = req.body;

    User.create({ firstName, lastName, email }).then((user) =>
      res
        .status(201)
        .json({ user: { ...user, token: getToken(user) } })
        .catch((err) => res.status(400).json({ err }))
    );
  },

  updateUser: (req, res) => {
    const { firstName, lastName, email } = req.body;

    const next = () =>
      User.findOne({ where: { id: req.params.id } })
        .then((user) => {
          if (user) {
            user
              .update({ firstName, lastName, email })
              .then((user) => res.status(202).json({ user }));
          } else res.status(206).json({});
        })
        .catch((error) => res.status(400).json({ error: error }));

    isAuth(req, res, next);
  },

  getUsers: (req, res) => {
    const next = () =>
      User.findAll()
        .then((users) => res.status(200).json({ users }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },

  getUser: (req, res) => {
    const next = () =>
      User.findByPk(req.params.id)
        .then((user) => res.status(200).json({ user }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },

  deleteUser: (req, res) => {
    const next = () =>
      User.destroy({ where: { id: req.params.id } })
        .then((user) => res.status(200).json({ user }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },

  deleteUsers: (req, res) => {
    const next = () =>
      User.destroy({ truncate: true })
        .then((users) => res.status(200).json({ users }))
        .catch((err) => res.status(400).json({ err }));

    isAuth(req, res, next);
  },
};
