const User = require("../models").User;

module.exports = {
  createUser: (req, res) => {
    const { firstName, lastName, email } = req.body;

    User.create({ firstName, lastName, email }).then((user) =>
      res
        .status(201)
        .json({ user })
        .catch((err) => res.status(400).json({ err }))
    );
  },

  updateUser: (req, res) => {
    const { firstName, lastName, email } = req.body;

    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        if (user) {
          user
            .update({ firstName, lastName, email })
            .then((user) => res.status(202).json({ user }));
        } else res.status(206).json({});
      })
      .catch((error) => res.status(400).json({ error: error }));
  },

  getUsers: (req, res) => {
    User.findAll({
      attributes: ["id", "firstName", "lastName", "email"],
      limit: 5,
      order: [["id", "DESC"]],
    })
      .then((users) => res.status(200).json({ users }))
      .catch((err) => res.status(400).json({ err }));
  },

  getUser: (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(400).json({ err }));
  },

  deleteUser: (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(400).json({ err }));
  },

  deleteUsers: (req, res) => {
    User.destroy({ truncate: true })
      .then((users) => res.status(200).json({ users }))
      .catch((err) => res.status(400).json({ err }));
  },
};
